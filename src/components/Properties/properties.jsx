import React, { useState } from 'react';
import './properties.css'; // Import the CSS file for styling
import Swal from 'sweetalert2';
import unit1 from '../../assets/rent1.jpg'
import unit2 from '../../assets/rent2.jpg'
import unit3 from '../../assets/rent3.jpg'
import unit4 from '../../assets/rent4.jpg'
import unit5 from '../../assets/rent5.jpg'
import sale1 from '../../assets/sale1.jpg'
import sale2 from '../../assets/sale2.jpg'
import sale3 from '../../assets/sale3.jpg'
import sale4 from '../../assets/sale4.jpg'
import sale5 from '../../assets/sale5.jpg'

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [propertyType, setPropertyType] = useState('all');

  const allImages = [
    { src: unit1, location: 'Muntinlupa City', name: '4BR House and Lot in Ayala Alabang Village', description: 'Nestled in a secure and exclusive enclave known for its first-class amenities, this prime Muntinlupa location offers the perfect blend of luxury living and a vibrant community.', type: 'rent', price: '₱230,000', bedrooms: 4, stories: 2, parking: 3 },
    { src: unit2, location: 'Makati City', name: '2BR Corner Unit in Park Terraces, Point Tower', description: 'Located in the heart of Makati, it provides residents with easy access to top-notch amenities, premier shopping, dining, and the business district, all within a prestigious address.', type: 'rent', price: '₱150,000', bedrooms: 2, stories: 1, parking: 2 },
    { src: unit3, location: 'Pasig City', name: 'Studio Loft in Eton Emerald Lofts, Ortigas Center', description: 'Discover the perfect blend of comfort and convenience in this stylish, fully-furnished studio loft at Eton Emerald Lofts, located in the heart of the Ortigas Business District.', type: 'rent', price: '₱27,000', bedrooms: 2, stories: 2, parking: 0 },
    { src: unit4, location: 'Pasig City', name: '2BR in East of Galleria, Ortigas Center', description: 'A sunny apartment in vibrant Miami.', type: 'rent', price: '₱43,000', bedrooms: 2, stories: 2, parking: 0 },
    { src: unit5, location: 'Quezon City', name: '1BR in Vinia Residences, North Edsa', description: 'Located in the middle of Quezon City, Vinia Residences is close to shopping malls, schools, eateries, hospitals and the newly opened Solaire Resort North!', type: 'rent', price: '₱25,000', bedrooms: 1, stories: 1, parking: 1 },
    { src: sale1, location: 'Muntinlupa City', name: '2BR in The St.Francis Shangri-La Place', description: ' Nestled in the heart of the city, this elegant residence offers breathtaking views, top-notch amenities, and unparalleled convenience with direct access to Shangri-La Plaza Mall, Shaw Boulevard and EDSA.', type: 'sale', price: '₱19,500,000', bedrooms: 2, stories: 2, parking: 1 },
    { src: sale2, location: 'Laguna City', name: '3BR House and Lot in Avida Settings NUVALI, Calamba', description: 'Modern Heritage Gem in the Heart of Nuvali-Avida Settings', type: 'sale', price: '₱15,000,000', bedrooms: 4, stories: 2, parking: 0 },
    { src: sale3, location: 'Quezon City', name: '2BR in One Orchard Road, Eastwood', description: 'Situated in the heart of Eastwood City, a vibrant and bustling mixed-use development known for its live-work-play environment and modern conveniences.', type: 'sale', price: '₱10,000,000', bedrooms: 2, stories: 1, parking: 0 },
    { src: sale4, location: 'Marikina City', name: 'Luxurious 5BR House and Lot in Loyola Grand Villas', description: 'Nestled on a prime corner lot, this opulent home boasts verdant, well-maintained gardens, a sparkling pool with a jacuzzi, and a spacious cabana, perfect for lavish gatherings', type: 'sale', price: '₱170,000,000', bedrooms: 5, stories: 3, parking: 10 },
    { src: unit5, location: 'Pasig City', name: '2BR in The Sandstone at Portico by Alveo', description: ' Located in the heart of Pasig, Portico offers unparalleled access to top-tier amenities, including a swimming pool, a fully-equipped fitness center, landscaped gardens, and an elegant clubhouse.', type: 'sale', price: '₱60,000', bedrooms: 2, stories: 1, parking: 2 },
  ];

  const filteredImages = allImages.filter(image =>
    (propertyType === 'all' || image.type === propertyType) &&
    image.location.toLowerCase().includes(location.toLowerCase()) &&
    image.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const imagesPerPage = 6;
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const currentImages = filteredImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const inquireNow = (image) => {
    Swal.fire({
      title: 'Inquire Now!',
      html:
        `
        <input type="text" id="name" class="swal2-input" placeholder="Name">
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        <input type="tel" id="phone" class="swal2-input" placeholder="Phone Number">`,
      focusConfirm: false,
      showCloseButton: true,
      confirmButtonText: 'Submit',
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value;
        const email = Swal.getPopup().querySelector('#email').value;
        const phone = Swal.getPopup().querySelector('#phone').value;

        // Validation logic
        if (!name || !email || !phone) {
          Swal.showValidationMessage(`Please enter the following name, email, and phone number`);
          return false;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
          Swal.showValidationMessage(`Please enter a valid name`);
          return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          Swal.showValidationMessage(`Please enter a valid email`);
          return false;
        }

        if (!/^\d{11}$/.test(phone)) {
          Swal.showValidationMessage(`Please enter a valid 11-digit phone number`);
          return false;
        }

        return { name: name, email: email, phone: phone };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Inquiry Sent!',
          `Name: ${result.value.name}<br>Email: ${result.value.email}<br>Phone: ${result.value.phone}`,
          'success'
        );
        //Server Side Execution
      }
    });
  };

  return (
    <div className="carousel" id = 'properties'>
      <h1 className='properties'>Residential Properties ({filteredImages.length})</h1>

      <div className="search-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            aria-label="Search"
            className="searchBar"
          />
        </div>
      </div>
      
      <div className="filter-container">
        <div className="filter-left">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Select Location"
            className="filter"
          >
            <option value="">Select Location</option>
            <option value="Muntinlupa City">Muntinlupa City</option>
            <option value="Makati City">Makati City</option>
            <option value="Pasig City">Pasig City</option>
            <option value="Quezon City">Quezon City</option>
            <option value="Marikina City">Marikina City</option>
            <option value="Laguna City">Laguna City</option>
          </select>
        </div>
        <div className="filter-right">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            aria-label="Select Property Type"
            className="filter"
          >
            <option value="all">All Properties</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      </div>

      <div className="carousel-images">
        <div className="info">
        </div>
        {filteredImages.length > 0 ? (
          <>
            <div className="pagination-controls">
              <button className="prev" onClick={prevPage} disabled={currentPage === 0} aria-label="Previous page">‹</button>
              <button className="next" onClick={nextPage} disabled={currentPage === totalPages - 1} aria-label="Next page">›</button>
            </div>
            <div className="grid">
              {currentImages.map((image, index) => (
                <div className="card" key={index}>
                  <img src={image.src} alt={image.name} />
                  <p className="card-description">
                    <strong className='name2'>{image.name}</strong><br />
                    {image.location}
                  </p>
                  <div className="actions">
                    <button
                      className="view-details-button"
                      onClick={() => Swal.fire({

                        html: `
      <div style="text-align: center;">
        <h3 style="margin-bottom: 20px;">${image.name}, ${image.location}</h3>
        <img src="${image.src}" alt="${image.name}" style="width: 500px; height: 200px; margin-bottom: 20px;">
        <div style="text-align: left; padding: 0 20px;">
          <p><strong>Description:</strong> ${image.description}</p>
          <p><strong>Price:</strong> ${image.price}</p>
          <p><strong>Bedrooms:</strong> ${image.bedrooms}</p>
          <p><strong>Stories:</strong> ${image.stories}</p>
          <p><strong>Parking:</strong> ${image.parking}</p>
        </div>
      </div>
    `,
    customClass: {
      popup: 'swal2-custom-popup',
     
    },
                       
                      })}
                      aria-label="View Details"
                    >
                      View Details
                    </button>
                    <button
                      className="inquire-now-button"
                      onClick={() => inquireNow(image)}
                    
                      aria-label="Inquire Now"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No properties found</p>
        )}
      </div>
      <div className="pagination">
        <span>Page {currentPage + 1} of {totalPages}</span>
      </div>
    </div>
  );
};

const App = () => {
  return <Properties />;
};

export default App;
