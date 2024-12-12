$(document).ready(function () {

    /* How to hide flash message after few seconds? (no date) 
    Stack Overflow. Available at: 
    https://stackoverflow.com/questions/31176402/how-to-hide-flash-message-after-few-seconds 
    (Accessed: 27 October 2024). */
    // Delay and fade out the flash message
    $("#flash-message").delay(4000).slideUp(200, function() {
    $(this).remove();
    });

    // Initialize tooltips for icons when hovered
    $('[data-toggle="tooltip"]').tooltip(); 

    // Get the CSRF token from the meta tag
    var csrf_token = $('meta[name=csrf-token]').attr('content');

    // Configure AJAX setup for CSRF token
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrf_token);
            }
        }
    });

    // For `saree_detail.html` - Handle local increment and decrement
    $(document).on("click", "#increment-btn, #decrement-btn", function (e) {
        e.preventDefault();
    
        const quantityInput = $("#quantity");
        const hiddenQuantityInput = $("#selected-quantity"); 
        const max = parseInt(quantityInput.attr("max"));
        const min = parseInt(quantityInput.attr("min")) || 1;
        let quantity = parseInt(quantityInput.val()) || 1;
    
        if ($(this).attr("id") === "increment-btn" && quantity < max) {
            quantity += 1;
        } else if ($(this).attr("id") === "decrement-btn" && quantity > min) {
            quantity -= 1;
        }
    
        quantityInput.val(quantity);
        hiddenQuantityInput.val(quantity); 
    });
    

    // Handle click on increment button
    $("a.increment-btn").on("click", function () {
        var item_id = $(this).attr('id'); 
        updateQuantity(item_id, 'increment');
    });

    // Handle click on decrement button
    $("a.decrement-btn").on("click", function () {
        var item_id = $(this).attr('id'); 
        updateQuantity(item_id, 'decrement');
    });

    

    // Function to send the AJAX request
    function updateQuantity(item_id, action) {
        $.ajax({
            url: '/update-quantity', 
            type: 'POST',
            data: JSON.stringify({ item_id: item_id, action: action }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.status === 'OK') {
                    const newSubtotal = response.new_subtotal.toFixed(1);
                    const newTotal = response.new_total.toFixed(1);

                    $("#quantity-" + item_id).text(response.new_quantity);
                    $("#subtotal-" + item_id).text("£" + newSubtotal);
                    $("#cart-total").text("Total: £" + newTotal);

                     // Update in cart modal 
                    $("#modal-quantity-" + item_id).text(response.new_quantity);
                    $("#modal-cart-total").text("Total: £" + newTotal);
                } else {
                    alert('Error updating quantity: ' + response.message);
                }
            },
            error: function (error) {
                console.log(error);
                alert('An error occurred while updating the cart.');
            }
        });
    }

    
});


// Cookie Consent Initialization
window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        palette: {
            popup: {
                background: "#eaf7f7",
                text: "#5c7291",
            },
            button: {
                background: "#c7182f",
                text: "#ffffff",
            },
        },
        content: {
            message: "This website uses cookies to ensure you get the best experience on our website.",
            dismiss: "Got it!",
            link: "Learn more",
            href: "/privacy-policy", 
        },
        cookie: {
            expiryDays: 365, 
        },
    });
});

