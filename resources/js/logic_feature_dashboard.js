var allSamplesSelected = false;
var allTestSuitsSelected = false;


//for samples
function isSampleSelected() {
    var selected = false;
    if (document.SampleForm.sampleId[0] != null) { // there is more than 1
        for (var j = 0; j < document.SampleForm.sampleId.length; j++) {
            selected = document.SampleForm.sampleId[j].checked;
            if (selected) break;
        }
    } else if (document.SampleForm.sampleId != null) { // only 1
        selected = document.SampleForm.sampleId.checked;
    }
    return selected;
}

function selectAllInSampleTable(isSelected) {
    allSamplesSelected = true;
    if (document.SampleForm.sampleId != null &&
        document.SampleForm.sampleId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.SampleForm.sampleId.length; j++) {
                document.SampleForm.sampleId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.SampleForm.sampleId.length; j++) {
                document.SampleForm.sampleId[j].checked = false;
            }
        }
    } else if (document.SampleForm.sampleId != null) { // only 1
        document.SampleForm.sampleId.checked = isSelected;
    }
    return false;
}

function deleteSamples() {
    var selected = isSampleSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the sample to be deleted.');
        return;
    }
    if (allSamplesSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.SampleForm.action = '../controller/deleteSampleFeatureDashboard.jag';
                document.SampleForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.SampleForm.action = '../controller/deleteSampleFeatureDashboard.jag';
                document.SampleForm.submit();
            }
        );
    }
}


function resetSampleVars() {
    allSamplesSelected = false;

    var isSelected = false;
    if (document.SampleForm.sampleId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.SampleForm.sampleId.length; j++) {
            if (document.SampleForm.sampleId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.SampleForm.sampleId != null) { // only 1 sg
        if (document.SampleForm.sampleId.checked) {
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
        CARBON.showInfoDialog('Please select the sample to be deleted.');
        return;
    }
    if (allSamplesSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
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

