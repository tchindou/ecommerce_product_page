$(document).ready(function () {
  var qty = 0;

  // Gestion du panier
  manageCart();

  // Gestion de la galerie d'images
  manageImageGallery();

  // Fonction pour mettre à jour le prix de l'article en fonction de la quantité
  function updateItemPrice(quantity) {
    var price = quantity * 125; // Prix fixe de l'article
    $("#itemQte").text(quantity);
    $("#quantity").text(quantity);
    $("#itemPrice").text("$" + price.toFixed(2)); // Formater le prix avec deux décimales
  }

  // Fonction de gestion du panier
  function manageCart() {
    $(".badge").hide();
    $(".cartContent").children().hide(); // Rendre invisibles les éléments enfants de cartContent par défaut

    // Créer le message indiquant que le panier est vide
    var emptyCartMessage = $(
      '<div class="text-gray-600 text-sm p-4 pt-10 h-full w-full text-center" id="emptyCartMessage">Votre panier est vide</div>'
    );
    $(".cartContent").append(emptyCartMessage);

    // Gestion de la quantité d'un article
    $("#minus").click(function () {
      var quantity = parseInt($("#quantity").text());
      if (quantity > 0) {
        $("#quantity").text(quantity - 1);
        $(".qte").text(quantity - 1);
      updateItemPrice(quantity - 1);
        if (quantity - 1 === 0) {
          $(".badge").hide();
          $(".cartContent").children().hide(); // Rendre invisibles les éléments enfants de cartContent lorsque la quantité atteint 0
          $("#emptyCartMessage").show(); // Afficher le message indiquant que le panier est vide
        }
      }
    });

    $("#plus").click(function () {
      var quantity = parseInt($("#quantity").text());
      if (quantity < 16) {
        $("#quantity").text(quantity + 1);
        $(".qte").text(quantity + 1);
      updateItemPrice(quantity + 1);
        $("#emptyCartMessage").hide(); // Cacher le message indiquant que le panier est vide lorsque la quantité est supérieure à 0
      }
    });

    // Gestion de l'ajout au panier
    $("#addToCart").click(function () {
      var quantity = parseInt($("#quantity").text());
      if (quantity > 0) {
        $(".badge").show();
        $(".qte").text(quantity);
        $(".cartContent").children().show(); // Afficher les éléments enfants de cartContent lorsque la quantité est supérieure à 0
        $("#emptyCartMessage").hide(); // Cacher le message indiquant que le panier est vide
      }
      updateItemPrice(quantity);
    });

    // Gestion du retrait du panier
    $("#removeCart").click(function () {
      $(".badge").hide();
      $(".cartContent").children().hide(); // Rendre invisibles les éléments enfants de cartContent lorsque le panier est vidé
      $("#emptyCartMessage").show(); // Afficher le message indiquant que le panier est vide
      updateItemPrice(0); // Mettre à jour le prix lorsque le panier est vidé
    });
  }

  // Fonction de gestion de la galerie d'images
  function manageImageGallery() {
    // Clic sur un élément image-item
    $(".image-item").click(function () {
      // Retirer la classe "active" de tous les éléments image-item
      $(".image-item").removeClass("active");
      $(".item-div")
        .removeClass("border-orange-500 border-2")
        .addClass("border-0");

      // Ajouter la classe "active" à l'élément cliqué
      $(this).addClass("active");
      $(this)
        .find(".item-div")
        .removeClass("border-0")
        .addClass("border-orange-500 border-2");

      // Récupérer l'URL de l'image à afficher dans image-view
      var imageUrl = $(this).find("img").attr("src");

      imageUrl = imageUrl.replace("-thumbnail", "");

      // Mettre à jour l'image dans image-view avec une animation
      $(".image-view").fadeOut(200, function () {
        $(this).attr("src", imageUrl).fadeIn(200);
      });
    });
  }
});
