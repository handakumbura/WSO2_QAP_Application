var allBuildsSelected = false;
var allFeaturesSelected = false;
var allTestPlansSelected = false;

function isVersionBuildSelected() {
    var selected = false;
    if (document.buildsForm.buildId[0] != null) { // there is more than 1
        for (var j = 0; j < document.buildsForm.buildId.length; j++) {
            selected = document.buildsForm.buildId[j].checked;
            if (selected) break;
        }
    } else if (document.buildsForm.buildId != null) { // only 1
        selected = document.buildsForm.buildId.checked;
    }
    return selected;
}

function isVersionFeatureSelected() {
    var selected = false;
    if (document.featuresForm.featureID[0] != null) { // there is more than 1
        for (var j = 0; j < document.featuresForm.featureID.length; j++) {
            selected = document.featuresForm.featureID[j].checked;
            if (selected) break;
        }
    } else if (document.featuresForm.featureID != null) { // only 1
        selected = document.featuresForm.featureID.checked;
    }
    return selected;
}

function isVersionTestPlanSelected() {
    var selected = false;
    if (document.testPlanForm.testplanID[0] != null) { // there is more than 1
        for (var j = 0; j < document.testPlanForm.testplanID.length; j++) {
            selected = document.testPlanForm.testplanID[j].checked;
            if (selected) break;
        }
    } else if (document.testPlanForm.testplanID != null) { // only 1
        selected = document.testPlanForm.testplanID.checked;
    }
    return selected;
}

function selectAllInBuildTable(isSelected) {
    allBuildsSelected = true;
    if (document.buildsForm.buildId != null &&
        document.buildsForm.buildId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.buildsForm.buildId.length; j++) {
                document.buildsForm.buildId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.buildsForm.buildId.length; j++) {
                document.buildsForm.buildId[j].checked = false;
            }
        }
    } else if (document.buildsForm.buildId != null) { // only 1
        document.buildsForm.buildId.checked = isSelected;
    }
    return false;
}

function selectAllInFeatureTable(isSelected) {
    allFeaturesSelected = true;
    if (document.featuresForm.featureID != null &&
        document.featuresForm.featureID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.featuresForm.featureID.length; j++) {
                document.featuresForm.featureID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.featuresForm.featureID.length; j++) {
                document.featuresForm.featureID[j].checked = false;
            }
        }
    } else if (document.featuresForm.featureID != null) { // only 1
        document.featuresForm.featureID.checked = isSelected;
    }
    return false;
}

function selectAllInTestPlanTable(isSelected) {
    allTestPlansSelected = true;
    if (document.testPlanForm.testplanID != null &&
        document.testPlanForm.testplanID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testPlanForm.testplanID.length; j++) {
                document.testPlanForm.testplanID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testPlanForm.testplanID.length; j++) {
                document.testPlanForm.testplanID[j].checked = false;
            }
        }
    } else if (document.testPlanForm.testplanID != null) { // only 1
        document.testPlanForm.testplanID.checked = isSelected;
    }
    return false;
}

function deleteVersionBuilds() {
    var selected = isVersionBuildSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the version builds to be deleted.');
        return;
    }
    if (allBuildsSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all version builds?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.buildsForm.action = '../controller/deleteVersionBuilds.jag';
                document.buildsForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected version builds?",
            function () {
                document.buildsForm.action = '../controller/deleteVersionBuilds.jag';
                document.buildsForm.submit();
            }
        );
    }
}

function deleteVersionFeatures() {
    var selected = isVersionFeatureSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the version feature to be deleted.');
        return;
    }
    if (allFeaturesSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all version features?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.featuresForm.action = '../controller/deleteVersionFeatures.jag';
                document.featuresForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected version features?",
            function () {
                document.featuresForm.action = '../controller/deleteVersionFeatures.jag';
                document.featuresForm.submit();
            }
        );
    }
}

function deleteVersionTestPlans() {
    var selected = isVersionTestPlanSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the version test plans to be deleted.');
        return;
    }
    if (allFeaturesSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all test plans test plans?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.testPlanForm.action = '../controller/deleteTestPlan.jag';
                document.testPlanForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected version test plans?",
            function () {
                document.testPlanForm.action = '../controller/deleteTestPlan.jag';
                document.testPlanForm.submit();
            }
        );
    }
}

function editVersionTestPlans() {
    var selected = isVersionTestPlanSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the version test plans to be edited.');
        return;
    }
    
    CARBON.showConfirmationDialog("Do you want to edit the status of test plan?",
        function () {
            document.testPlanForm.action = '../controller/editTestPlan.jag';
            document.testPlanForm.submit();
        }
    );
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


