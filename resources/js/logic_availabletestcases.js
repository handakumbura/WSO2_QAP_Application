var allSelected = false;


function isAvailableTestCasesSelected() {
    var selected = false;
    if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
            selected = document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[j].checked;
            if (selected) break;
        }
    } else if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID != null) { // only 1
        selected = document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.checked;
    }
    return selected;
}

function deleteTestcase() {
    var selected = isAvailableTestCasesSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the test cases to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all test cases?",
            function () {

                document.availabletestcaseForm.action = '../controller/deleteTestcase.jag';
                document.availabletestcaseForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test cases?",
            function () {
                document.availabletestcaseForm.action = '../controller/deleteTestcase.jag';
                document.availabletestcaseForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID != null &&
        document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
                document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
                document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[j].checked = false;
            }
        }
    } else if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID != null) { // only 1
        document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.checked = isSelected;
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
    if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
            if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID != null) { // only 1 sg
        if (document.availabletestcaseForm.WSO2_QAP_TEST_CASE_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}

function addTestcase()
{

    var selected = isAvailableTestCasesSelected();

    if (!selected) {
        CARBON.showInfoDialog('Please select the test cases to be added');
        return;
    }
     else {
        CARBON.showConfirmationDialog("Do you want to add the selected test cases?",
            function () {

                document.availabletestcaseForm.submit();
            }
        );
    }

}

