var allSelected = false;


function isProductSelected() {
    var selected = false;
    if (document.productsForm.productId[0] != null) { // there is more than 1
        for (var j = 0; j < document.productsForm.productId.length; j++) {
            selected = document.productsForm.productId[j].checked;
            if (selected) break;
        }
    } else if (document.productsForm.productId != null) { // only 1
        selected = document.productsForm.productId.checked;
    }
    return selected;
}

function deleteProducts() {
    var selected = isProductSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the applications to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all products?",
            function () {
                //location.href = '../controller/deleteProducts.jag?deleteAllWebapps=true&webappState=all';
                document.productsForm.action = '../controller/deleteProducts.jag';
                document.productsForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected products?",
            function () {
                document.productsForm.action = '../controller/deleteProducts.jag';
                document.productsForm.submit();
            }
        );
    }
}

function editProducts() {

    var selected = isProductSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the product to be edited.');
        return;
    }
    var count=0;
	for(var j=0; j< document.productsForm.productId.length; j++){
		if(document.productsForm.productId[j].checked){
			count=count+1;
		}
	}
	if(count > 1){
		CARBON.showInfoDialog('Please select only one product to edit.');
        return;
	}
	else{
		CARBON.showConfirmationDialog("Do you want to edit the selected product?",
        function () {
            document.productsForm.action = '../controller/editProducts.jag';
            document.productsForm.submit();
        }
    	);
	}
    
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.productsForm.productId != null &&
        document.productsForm.productId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.productsForm.productId.length; j++) {
                document.productsForm.productId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.productsForm.productId.length; j++) {
                document.productsForm.productId[j].checked = false;
            }
        }
    } else if (document.productsForm.productId != null) { // only 1
        document.productsForm.productId.checked = isSelected;
    }
    return false;
}

function selectAllInAllPages() {
    selectAllInThisPage(true);
    allSelected = true;
    return false;
}

function resetVars() {
    allSelected = false;

    var isSelected = false;
    if (document.productsForm.productId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.productsForm.productId.length; j++) {
            if (document.productsForm.productId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.productsForm.productId != null) { // only 1 sg
        if (document.productsForm.productId.checked) {
            isSelected = true;
        }
    }
    return false;
}

