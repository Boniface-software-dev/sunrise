import os
from flask import Flask, jsonify
from flask_cors import CORS
import requests
import random

app = Flask(__name__)
CORS(app)

# ---------------------------------------------------------
# CONFIGURATION
# ---------------------------------------------------------
# Your specific RapidAPI credentials for Zillow
RAPID_API_KEY = "802be51ad8msh2f42ed202dd9076p166418jsn84d3103deffc"
RAPID_API_HOST = "zillow56.p.rapidapi.com"

# ---------------------------------------------------------
# HARDCODED BACKUP DATA (Fallback)
# ---------------------------------------------------------
# Used if the API fails or you run out of free requests
BACKUP_PROPERTIES = [
    {
        'id': 'backup_1',
        'title': 'Luxury Villa in Beverly Hills',
        'address': '123 Palm Dr, Beverly Hills, CA',
        'desc': 'A stunning villa with modern amenities.',        
        'image': 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80', 
        'price': '$5,000,000',
        'beds': 5,
        'baths': 4
    },
    {
        'id': 'backup_2',
        'title': 'Downtown Apartment',
        'address': '456 Main St, New York, NY',
        'desc': 'A cozy apartment in the heart of the city.',           
        'image': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
        'price': '$850,000',
        'beds': 2,
        'baths': 2
    },
    {
        'id': 'backup_3',
        'title': 'Beachfront Condo',
        'address': '789 Ocean Blvd, Miami, FL',
        'desc': 'Enjoy ocean views from this beautiful condo.',           
        'image': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        'price': '$1,200,000',
        'beds': 3,
        'baths': 2
    }
]

# ---------------------------------------------------------
# ROUTES
# ---------------------------------------------------------

@app.route('/api/health')
def health_check():
    return jsonify({"status": "ok"})

@app.route('/api/services')
def services():
    items = [
        {'id': 1, 'title': 'Residential Sales', 'desc': 'Find your dream home.'},
        {'id': 2, 'title': 'Commercial Sales', 'desc': 'Invest in commercial properties.'},
        {'id': 3, 'title': 'Property Management', 'desc': 'We manage your properties.'},
        {'id': 4, 'title': 'Real Estate Consulting', 'desc': 'Expert advice for your real estate needs.'}
    ]
    return jsonify(items)

@app.route('/api/featured')
def featured_properties():
    # 1. SETUP: The URL from your curl command
    url = f"https://{RAPID_API_HOST}/search"

    # 2. SETUP: The Parameters from your curl command
    querystring = {
        "location": "houston, tx",  # You can change this to any city!
        "output": "json",
        "status": "forSale",
        "sortSelection": "priorityscore",
        "listing_type": "by_agent",
        "doz": "any"
    }

    # 3. SETUP: The Headers from your curl command
    headers = {
        "x-rapidapi-host": RAPID_API_HOST,
        "x-rapidapi-key": RAPID_API_KEY
    }

    try:
        # 4. EXECUTE: Convert curl to Python Request
        response = requests.get(url, headers=headers, params=querystring)
        
        # Check for errors
        if response.status_code != 200:
            print(f"API Error Status: {response.status_code}")
            raise Exception("API Failed")

        data = response.json()
        
        # 5. TRANSFORM: Zillow data structure is different. We need to find the list of houses.
        # Usually Zillow APIs return data in 'results' or 'props'
        # We will look for the list inside the response.
        
        properties_list = data.get('results', []) 
        
        # If the structure is weird (sometimes it's inside 'data' -> 'results')
        if not properties_list and 'data' in data:
             properties_list = data['data']

        if not properties_list:
            print("API returned no properties.")
            raise Exception("No properties found")

        cleaned_data = []
        
        # We only want the first 6 properties
        for prop in properties_list[:6]:
            
            # Extract data safely (Zillow uses different key names)
            price = prop.get('price', prop.get('zestimate', 0))
            if isinstance(price, (int, float)):
                formatted_price = f"${price:,.0f}"
            else:
                formatted_price = str(price)

            # Get the real image! Fallback to Unsplash if missing.
            img_src = prop.get('imgSrc', prop.get('image', None))
            if not img_src:
                img_src = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'

            item = {
                'id': prop.get('zpid', str(random.randint(1000,9999))), # Zillow ID
                'title': f"Home in {prop.get('city', 'Houston')}",
                'address': f"{prop.get('streetAddress', 'Unknown Address')}, {prop.get('city', '')}",
                'desc': f"{prop.get('bedrooms', '?')} bds, {prop.get('bathrooms', '?')} ba - {prop.get('livingArea', 'N/A')} sqft", 
                'image': img_src, 
                'price': formatted_price,
                'beds': prop.get('bedrooms', 0),
                'baths': prop.get('bathrooms', 0),
            }
            cleaned_data.append(item)

        return jsonify(cleaned_data)

    except Exception as e:
        print(f"❌ Error fetching Zillow API: {e}")
        # print(f"Raw Response for debugging: {response.text}") # Uncomment to debug
        print("🔄 Switching to fallback data...")
        return jsonify(BACKUP_PROPERTIES)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)