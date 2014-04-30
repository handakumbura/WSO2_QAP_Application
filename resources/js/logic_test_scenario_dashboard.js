var allSelected = false;
var allTestSuitsSelected = false;


//for TestCases
function isTestcaseSelected() {
    var selected = false;
    if (document.testcasesForm.testcaseId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testcasesForm.testcaseId.length; j++) {
            selected = document.testcasesForm.testcaseId[j].checked;
            if (selected) break;
        }
    } else if (document.testcasesForm.testcaseId != null) { // only 1
        selected = document.testcasesForm.testcaseId.checked;
    }
    return selected;
}

function deleteTestcase() {
    var selected = isTestcaseSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the testcase to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all testcases?",
            function () {
                //location.href = '../controller/deleteTestcase.jag?deleteAllWebapps=true&webappState=all';
                document.testcasesForm.action = '../controller/deleteTestSuitCase.jag';
                document.testcasesForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected testcase?  are you sure there is no test result entry for this test cases ?",
            function () {
                document.testcasesForm.action = '../controller/deleteTestSuitCase.jag';
                document.testcasesForm.submit();
            }
        );
    }
}

function addTestStatus() {
	alert("ok");
    /*var selected = isTestcaseSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the testcase to be added.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to add all testcases?",
            function () {
                //location.href = '../controller/deleteTestcase.jag?deleteAllWebapps=true&webappState=all';
                document.testcasesForm.action = '../controller/InsertTestCaseResults.jag';
                document.testcasesForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to add the selected testcase?",
            function () {
                document.testcasesForm.action = '../controller/InsertTestCaseResults.jag';
                document.testcasesForm.submit();
            }
        );
    }*/
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.testcasesForm.testcaseId != null &&
        document.testcasesForm.testcaseId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testcasesForm.testcaseId.length; j++) {
                document.testcasesForm.testcaseId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testcasesForm.testcaseId.length; j++) {
                document.testcasesForm.testcaseId[j].checked = false;
            }
        }
    } else if (document.testcasesForm.testcaseId != null) { // only 1
        document.testcasesForm.testcaseId.checked = isSelected;
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
    if (document.testcasesForm.testcaseId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testcasesForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
            if (document.testcasesForm.testcaseId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testcasesForm.testcaseId != null) { // only 1 sg
        if (document.testcasesForm.testcaseId.checked) {
            isSelected = true;
        }
    }
    return false;
}


//for test suits
function isTestSuitSelected() {
    var selected = false;
    if (document.TestSuitForm.testSuitId[0] != null) { // there is more than 1
        for (var j = 0; j < document.TestSuitForm.testSuitId.length; j++) {
            selected = document.TestSuitForm.testSuitId[j].checked;
            if (selected) break;
        }
    } else if (document.TestSuitForm.testSuitId != null) { // only 1
        selected = document.TestSuitForm.testSuitId.checked;
    }
    return selected;
}

function selectAllInTestSuitTable(isSelected) {
    allTestSuitsSelected = true;
    if (document.TestSuitForm.testSuitId != null &&
        document.TestSuitForm.testSuitId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.TestSuitForm.testSuitId.length; j++) {
                document.TestSuitForm.testSuitId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.TestSuitForm.testSuitId.length; j++) {
                document.TestSuitForm.testSuitId[j].checked = false;
            }
        }
    } else if (document.TestSuitForm.testSuitId != null) { // only 1
        document.TestSuitForm.testSuitId.checked = isSelected;
    }
    return false;
}

function deleteTestSuits() {
    var selected = isTestSuitSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the test suits to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all the test suits?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.TestSuitForm.action = '../controller/deleteTestSuitFeatureDashboard.jag';
                document.TestSuitForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.TestSuitForm.action = '../controller/deleteTestSuitFeatureDashboard.jag';
                document.TestSuitForm.submit();
            }
        );
    }
}


function resetTestSuitVars() {
    allTestSuitsSelected = false;

    var isSelected = false;
    if (document.TestSuitForm.testSuitId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.TestSuitForm.testSuitId.length; j++) {
            if (document.TestSuitForm.testSuitId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.TestSuitForm.testSuitId != null) { // only 1 sg
        if (document.TestSuitForm.testSuitId.checked) {
            isSelected = true;
        }
    }
    return false;
}

