var allTestResultsSelected = false;

function isBuildTestResultSelected() {
    var selected = false;
    if (document.buildTestResults.testResultId[0] != null) { // there is more than 1
        for (var j = 0; j < document.buildTestResults.testResultId.length; j++) {
            selected = document.buildTestResults.testResultId[j].checked;
            if (selected) break;
        }
    } else if (document.buildTestResults.testResultId != null) { // only 1
        selected = document.buildTestResults.testResultId.checked;
    }
    return selected;
}

function selectAllInTestResultTable(isSelected) {
    allTestResultsSelected = true;
    if (document.buildTestResults.testResultId != null &&
        document.buildTestResults.testResultId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.buildTestResults.testResultId.length; j++) {
                document.buildTestResults.testResultId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.buildTestResults.testResultId.length; j++) {
                document.buildTestResults.testResultId[j].checked = false;
            }
        }
    } else if (document.buildTestResults.testResultId != null) { // only 1
        document.buildTestResults.testResultId.checked = isSelected;
    }
    return false;
}

function deleteBuildTestResults() {

    var selected = isBuildTestResultSelected();

    if (!selected) {
        CARBON.showInfoDialog('Please select the test result to be deleted.');
        return;
    }
    if (allTestResultsSelected) {
        CARBON.showConfirmationDialog("Do you want to delete the selected test results?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.buildTestResults.action = '../controller/deleteBuildResults.jag';
                document.buildTestResults.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test results?",
            function () {
                document.buildTestResults.action = '../controller/deleteBuildResults.jag';
                document.buildTestResults.submit();
            }
        );
    }
}


function resetVars() {
    allTestResultsSelected = false;

    var isSelected = false;
    if (document.buildTestResults.testResultId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.buildTestResults.testResultId.length; j++) {
            if (document.buildTestResults.testResultId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.buildTestResults.testResultId != null) { // only 1 sg
        if (document.buildTestResults.testResultId.checked) {
            isSelected = true;
        }
    }
    return false;
}			


