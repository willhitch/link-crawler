if (document.getElementById("p1")) {
	// Variables
	var links = document.getElementsByTagName("a");
	var linkArr = [];
	var productList = document.getElementById("product-list");
	var productDiv = document.getElementById("p1");

	// Keep Track Of Product links
	var rvDigestItLiquid = 0;
	var rvDigestItPowder = 0;
	var rvDigestItDropIn = 0;
	var rvToiletCleaner = 0;
	var tankCleaner = 0;
	var sensorCleaner = 0;
	var tankOdor = 0;
	var marineDigestIt = 0;
	var uniqueMethod = 0;
	var hotWeather = 0;
	var dryCamper = 0;
	var fullHookup = 0;
	var fullTimer = 0;
	var biannualTank = 0;

	for (var i = 0; i < links.length; i++) {
		// Sort Through Links and Find Products
		var text;
		// Once Links Match Product Push InnerHTML to Array
		switch (links[i].href) {
			case "https://uniquecampingmarine.com/collections/rv-products/products/rv-digest-it-holding-tank-treatment":
			case "https://uniquecampingmarine.com/collections/all/products/rv-digest-it-holding-tank-treatment":
			case "https://uniquecampingmarine.com/products/rv-digest-it-holding-tank-treatment":
				if (rvDigestItLiquid <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">RV Digest-It | Liquid</a>`;
					linkArr.push(text);
					rvDigestItLiquid++;
				} else if (rvDigestItLiquid > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/rv-digest-it-drop-in-pods":
			case "https://uniquecampingmarine.com/collections/all/products/rv-digest-it-drop-in-pods":
			case "https://uniquecampingmarine.com/products/rv-digest-it-drop-in-pods":
				if (rvDigestItDropIn <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">RV Digest-It | Drop-In</a>`;
					linkArr.push(text);
					rvDigestItDropIn++;
				} else if (rvDigestItDropIn > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/rv-digest-it-powder-treatment":
			case "https://uniquecampingmarine.com/collections/all/products/rv-digest-it-powder-treatment":
			case "https://uniquecampingmarine.com/products/rv-digest-it-powder-treatment":
				if (rvDigestItPowder <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">RV Digest-It | Powder</a>`;
					linkArr.push(text);
					rvDigestItPowder++;
				} else if (rvDigestItPowder > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/rv-toilet-bowl-cleaner-holding-tank-enhancer":
			case "https://uniquecampingmarine.com/collections/all/products/rv-toilet-bowl-cleaner-holding-tank-enhancer":
			case "https://uniquecampingmarine.com/products/rv-toilet-bowl-cleaner-holding-tank-enhancer":
				if (rvToiletCleaner <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">RV Toilet Cleaner + Holding Tank Enhancer</a>`;
					linkArr.push(text);
					rvToiletCleaner++;
				} else if (rvToiletCleaner > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/rv-tank-cleaner":
			case "https://uniquecampingmarine.com/collections/all/products/rv-tank-cleaner":
			case "https://uniquecampingmarine.com/products/rv-tank-cleaner":
				if (tankCleaner <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Holding Tank Cleaner</a>`;
					linkArr.push(text);
					tankCleaner++;
				} else if (tankCleaner > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/sensor-cleaner":
			case "https://uniquecampingmarine.com/collections/all/products/sensor-cleaner":
			case "https://uniquecampingmarine.com/products/sensor-cleaner":
				if (sensorCleaner <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Sensor Cleaner</a>`;
					linkArr.push(text);
					sensorCleaner++;
				} else if (sensorCleaner > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/tank-odor-eliminator-drop-in-pods":
			case "https://uniquecampingmarine.com/collections/all/products/tank-odor-eliminator-drop-in-pods":
			case "https://uniquecampingmarine.com/products/tank-odor-eliminator-drop-in-pods":
				if (tankOdor <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Tank Odor Eliminator</a>`;
					linkArr.push(text);
					tankOdor++;
				} else if (tankOdor) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/marine-products/products/marine-digest-it":
			case "https://uniquecampingmarine.com/collections/all/products/marine-digest-it":
			case "https://uniquecampingmarine.com/products/marine-digest-it":
				if (marineDigestIt <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Marine Digest-It</a>`;
					linkArr.push(text);
					marineDigestIt++;
				} else if (marineDigestIt > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/the-unique-method-product-pack":
			case "https://uniquecampingmarine.com/collections/all/products/the-unique-method-product-pack":
			case "https://uniquecampingmarine.com/products/the-unique-method-product-pack":
				if (uniqueMethod <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Unique Method Product Pack</a>`;
					linkArr.push(text);
					uniqueMethod++;
				} else if (uniqueMethod > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/hot-weather-camper-pack":
			case "https://uniquecampingmarine.com/collections/all/products/hot-weather-camper-pack":
			case "https://uniquecampingmarine.com/products/hot-weather-camper-pack":
				if (hotWeather <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Hot Weather Camper Pack</a>`;
					linkArr.push(text);
					hotWeather++;
				} else if (hotWeather > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/dry-camper-pack":
			case "https://uniquecampingmarine.com/collections/all/products/dry-camper-pack":
			case "https://uniquecampingmarine.com/products/dry-camper-pack":
				if (dryCamper <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Dry Camper Pack</a>`;
					linkArr.push(text);
					dryCamper++;
				} else if (dryCamper > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/full-hookup-camping-pack":
			case "https://uniquecampingmarine.com/collections/all/products/full-hookup-camping-pack":
			case "https://uniquecampingmarine.com/products/full-hookup-camping-pack":
				if (fullHookup <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Full Hookup Camper Pack</a>`;
					linkArr.push(text);
					fullHookup++;
				} else if (fullHookup > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/full-timer-pack":
			case "https://uniquecampingmarine.com/collections/all/products/full-timer-pack":
			case "https://uniquecampingmarine.com/products/full-timer-pack":
				if (fullTimer <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Full Timer Camper Pack</a>`;
					linkArr.push(text);
					fullTimer++;
				} else if (fullTimer > 0) {
					break;
				}
				break;
			case "https://uniquecampingmarine.com/collections/rv-products/products/tank-maintenance-pack":
			case "https://uniquecampingmarine.com/collections/all/products/tank-maintenance-pack":
			case "https://uniquecampingmarine.com/products/tank-maintenance-pack":
				if (biannualTank <= 0) {
					text = `<a href="${links[i].href}" title="View Product" target="_blank" rel="noopener noreferrer">Biannual Tank Maintenance Pack</a>`;
					linkArr.push(text);
					biannualTank++;
				} else if (biannualTank > 0) {
					break;
				}
				break;
			default:
		}
	}

	// Clean Up Duplicates
	var uniqueLinks = linkArr.filter(function (item, index) {
		return linkArr.indexOf(item) >= index;
	});

	// Sorts Links Alphabetically | *URLs added dynamically from the for loop above may throw off order
	uniqueLinks.sort();

	// Append Links
	if (productDiv) {
		uniqueLinks.forEach(function (product) {
			var bullet = document.createElement("li");
			bullet.innerHTML = product;
			productList.appendChild(bullet);
		});
	}

	// If Links, Show Product Section
	if (productDiv && linkArr.length) {
		productDiv.style.display = "block";
	}
}
