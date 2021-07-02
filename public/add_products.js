$(function () {
	let productName = $("#productName");
	let productManufacturer = $("#productManufacturer");
	let productPrice = $("#productPrice");

	$("#btnaddProduct").click(function () {
		addProducts(
			productName.val(),
			productManufacturer.val(),
			productPrice.val(),
			(addedProduct) => {
				window.alert("Added " + addedProduct.name + " to Database");
				console.log("Added " + addedProduct.name + " to Database");
			}
		);
	});
});
