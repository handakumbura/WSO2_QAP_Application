var allSelected = false;

//for samples
function isSelected() {
    var selected = false;
    if (document.addfeatureForm.featureId[0] != null) { // there is more than 1
        for (var j = 0; j < document.addfeatureForm.featureId.length; j++) {
            selected = document.addfeatureForm.featureId[j].checked;
            if (selected) break;
        }
    } else if (document.addfeatureForm.featureId != null) { // only 1
        selected = document.addfeatureForm.featureId.checked;
    }
    return selected;
}

function selectAllInThisPage(isSelected) {
    allSelected = true;
    if (document.addfeatureForm.featureId != null &&
        document.addfeatureForm.featureId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.addfeatureForm.featureId.length; j++) {
                document.addfeatureForm.featureId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.addfeatureForm.featureId.length; j++) {
                document.addfeatureForm.featureId[j].checked = false;
            }
        }
    } else if (document.addfeatureForm.featureId != null) { // only 1
        document.addfeatureForm.featureId.checked = isSelected;
    }
    return false;
}

function addFeatureToVersion() {
    var selected = isSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the feature to be add.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to add all features to version?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.addfeatureForm.action = '../controller/addVersionToFeatureCallService.jag';
                document.addfeatureForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to add the selected features?",
            function () {
                document.addfeatureForm.action = '../controller/addVersionToFeatureCallService.jag';
                document.addfeatureForm.submit();
            }
        );
    }
}


function resetVars() {
    allSelected = false;

    var isSelected = false;
    if (document.addfeatureForm.featureId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.addfeatureForm.featureId.length; j++) {
            if (document.addfeatureForm.featureId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.addfeatureForm.featureId != null) { // only 1 sg
        if (document.addfeatureForm.featureId.checked) {
            isSelected = true;
        }
    }
    return false;
}