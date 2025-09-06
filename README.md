# NakshiKantha E-commerce Platform  

This project is a full-stack e-commerce web application built as part of the COMP2011 module at the University of Leeds. The platform is designed for selling sarees, with a focus on creating a functional, responsive, and accessible online shopping experience.  

## Features  
- **User Accounts & Guest Checkout**: Supports both registered users (with order history and wishlists) and guest checkout for quick purchases.  
- **Product Browsing & Search**: Organised categories and sub-categories with breadcrumb navigation for usability. Includes dynamic search functionality to quickly locate products.  
- **Dynamic Cart & Wishlist**: Users can add, increment, decrement, and remove items directly from modals or product pages. Wishlist items can be added to cart with one click.  
- **Checkout & Orders**: Streamlined checkout process with shipping address collection, order storage, and order history tracking.  
- **Security**: Password reset functionality with secure token validation and hashed password storage.  
- **Accessibility**: Implemented ARIA attributes, tooltips, and WAVE testing to ensure strong accessibility compliance.  
- **Responsive Design**: Built with Bootstrap grid system to work seamlessly across desktop, tablet, and mobile devices.  
- **Database Design**: Normalised schema to handle users, sarees, carts, wishlists, and orders with strong relational integrity.  

## Technologies Used  
- **Backend**: Flask (Python)  
- **Frontend**: HTML, CSS, Bootstrap, JavaScript (modals, interactivity)  
- **Database**: SQLite  
- **Deployment**: PythonAnywhere  
- **Testing**: Manual functional and accessibility testing with WAVE + cross-browser/device checks  

## Challenges Solved  
- Integrated real-time dynamic cart management with Flask and JavaScript modals.  
- Managed stock quantities and concurrency during checkout.  
- Ensured accessibility through semantic HTML, ARIA attributes, and keyboard navigation.  

## Future Improvements  
- Payment gateway integration.  
- Advanced product filtering (price range, material type).  
- Improved user profiles with saved addresses and account details.  
- Enhanced UI animations and smoother transitions.  

## Demo & Documentation  
- [Final Report PDF](./Final%20Report%20-%20COMP2011.pdf)  
