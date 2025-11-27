from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
    items = [
        {
            'id': 1,
            'title': 'Luxury Villa in Beverly Hills',
            'desc': 'A stunning villa with modern amenities.',         
            'image': 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80', 
            'price': '$5,000,000'
        },
        {
            'id': 2,
            'title': 'Downtown Apartment',
            'desc': 'A cozy apartment in the heart of the city.',           
            'image': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
            'price': '$850,000'
        },
        {
            'id': 3,
            'title': 'Beachfront Condo',
            'desc': 'Enjoy ocean views from this beautiful condo.',           
            'image': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            'price': '$1,200,000'
        }
    ]
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)