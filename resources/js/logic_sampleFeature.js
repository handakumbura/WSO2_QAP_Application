var allSelected = false;


function isFeatureSelected() {
    var selected = false;
    if (document.featuresForm.WSO2_QAP_FEATURE_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.featuresForm.WSO2_QAP_FEATURE_ID.length; j++) {
            selected = document.featuresForm.WSO2_QAP_FEATURE_ID[j].checked;
            if (selected) break;
        }
    } else if (document.featuresForm.WSO2_QAP_FEATURE_ID != null) { // only 1
        selected = document.featuresForm.WSO2_QAP_FEATURE_ID.checked;
    }
    return selected;
}

function deleteFeature() {
    var selected = isFeatureSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the samples to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
            function () {

                document.featuresForm.action = '../controller/deleteSample.jag';
                document.featuresForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.featuresForm.action = '../controller/deleteSample.jag';
                document.featuresForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.featuresForm.WSO2_QAP_FEATURE_ID != null &&
        document.featuresForm.WSO2_QAP_FEATURE_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.featuresForm.WSO2_QAP_FEATURE_ID.length; j++) {
                document.featuresForm.WSO2_QAP_FEATURE_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.featuresForm.WSO2_QAP_FEATURE_ID.length; j++) {
                document.featuresForm.WSO2_QAP_FEATURE_ID[j].checked = false;
            }
        }
    } else if (document.featuresForm.WSO2_QAP_FEATURE_ID != null) { // only 1
        document.featuresForm.WSO2_QAP_FEATURE_ID.checked = isSelected;
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
    if (document.featuresForm.WSO2_QAP_FEATURE_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.featuresForm.WSO2_QAP_FEATURE_ID.length; j++) {
            if (document.featuresForm.WSO2_QAP_FEATURE_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.featuresForm.WSO2_QAP_FEATURE_ID != null) { // only 1 sg
        if (document.featuresForm.WSO2_QAP_FEATURE_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}

