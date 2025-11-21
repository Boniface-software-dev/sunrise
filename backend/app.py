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
            'img': 'https://example.com/images/villa1.jpg',
            'price': '$5,000,000'
        },
        {
            'id': 2,
            'title': 'Downtown Apartment',
            'desc': 'A cozy apartment in the heart of the city.',
            'img': 'https://example.com/images/apartment1.jpg',
            'price': '$850,000'
        },
        {
            'id': 3,
            'title': 'Beachfront Condo',
            'desc': 'Enjoy ocean views from this beautiful condo.',
            'img': 'https://example.com/images/condo1.jpg',
            'price': '$1,200,000'
        }
    ]
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
    