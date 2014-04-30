var allSelected = false;


function isAvailableSamplesSelected() {
    var selected = false;
    if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.length; j++) {
            selected = document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[j].checked;
            if (selected) break;
        }
    } else if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID != null) { // only 1
        selected = document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.checked;
    }
    return selected;
}

function deleteSample() {
    var selected = isAvailableSamplesSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the samples to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
            function () {

                document.availablesamplesForm.action = '../controller/deleteSample.jag';
                document.availablesamplesForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.availablesamplesForm.action = '../controller/deleteSample.jag';
                document.availablesamplesForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID != null &&
        document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.length; j++) {
                document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.length; j++) {
                document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[j].checked = false;
            }
        }
    } else if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID != null) { // only 1
        document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.checked = isSelected;
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
    if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.length; j++) {
            if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID != null) { // only 1 sg
        if (document.availablesamplesForm.WSO2_QAP_SAMPLE_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}

function addSamples()
{

    var selected = isAvailableSamplesSelected();

    if (!selected) {
        CARBON.showInfoDialog('Please select the samples to be added');
        return;
    }
     else {
        CARBON.showConfirmationDialog("Do you want to add the selected samples?",
            function () {

                document.availablesamplesForm.submit();
            }
        );
    }

}

