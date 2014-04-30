var allSelected = false;

function isProductVersionSelected() {
    var selected = false;
    if (document.productVersionForm.versionId[0] != null) { // there is more than 1
        for (var j = 0; j < document.productVersionForm.versionId.length; j++) {
            selected = document.productVersionForm.versionId[j].checked;
            if (selected) break;
        }
    } else if (document.productVersionForm.versionId != null) { // only 1
        selected = document.productVersionForm.versionId.checked;
    }
    return selected;
}

function deleteProductVersions() {
    var selected = isProductVersionSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the product versions to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all product versions?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.productVersionForm.action = '../controller/deleteProductVersions.jag';
                document.productVersionForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected product versions?",
            function () {
                document.productVersionForm.action = '../controller/deleteProductVersions.jag';
                document.productVersionForm.submit();
            }
        );
    }
}

function editProductVersion() {

    var selected = isProductVersionSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the product version to be edited.');
        return;
    }
    var count=0;
    for(var j=0; j< document.productVersionForm.versionId.length; j++){
        if(document.productVersionForm.versionId[j].checked){
            count=count+1;
        }
    }
    if(count > 1){
        CARBON.showInfoDialog('Please select only one product version to edit.');
        return;
    }
    else{
        CARBON.showConfirmationDialog("Do you want to edit the selected product version?",
        function () {
            document.productVersionForm.action = '../controller/editProductVersion.jag';
            document.productVersionForm.submit();
        }
        );
    }
    
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.productVersionForm.versionId != null &&
        document.productVersionForm.versionId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.productVersionForm.versionId.length; j++) {
                document.productVersionForm.versionId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.productVersionForm.versionId.length; j++) {
                document.productVersionForm.versionId[j].checked = false;
            }
        }
    } else if (document.productVersionForm.versionId != null) { // only 1
        document.productVersionForm.versionId.checked = isSelected;
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
    if (document.productVersionForm.versionId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.productVersionForm.versionId.length; j++) {
            if (document.productVersionForm.versionId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.productVersionForm.versionId != null) { // only 1 sg
        if (document.productVersionForm.versionId.checked) {
            isSelected = true;
        }
    }
    return false;
}

