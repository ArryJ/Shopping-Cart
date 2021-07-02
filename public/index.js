function fetchProducts(done) {
	$.get("/api/products", function (data) {
		console.log(data);
		done(data);
	});
}

function createCard(product) {
	return $(`<div class="col-4 card mx-2 p-4">
    <h4 class="product-name">${product.name}</h4>
    <div class="product-manufacturer">${product.manufacturer}</div>
    <div class="row">
        <div class="col m-3 p-3">
            <b>Rs ${product.price}</b>
        </div>
        <button class="col btn btn-primary m-3">Buy</button>
    </div>
</div>`);
}

$(function () {
	let productlist = $("#product-list");

	fetchProducts(function (products) {
		productlist.empty();
		for (product of products) {
			productlist.append(createCard(product));
		}
	});
});
