var allPlansSelected = false;

function isTestPlanSelected() {
    var selected = false;
    if (document.testPlanForm.testSuitId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testPlanForm.testSuitId.length; j++) {
            selected = document.testPlanForm.testSuitId[j].checked;
            if (selected) break;
        }
    } else if (document.testPlanForm.testSuitId != null) { // only 1
        selected = document.testPlanForm.testSuitId.checked;
    }
    return selected;
}

function selectAllInPlanTable(isSelected) {
    allPlansSelected = true;
    if (document.testPlanForm.testSuitId != null &&
        document.testPlanForm.testSuitId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testPlanForm.testSuitId.length; j++) {
                document.testPlanForm.testSuitId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testPlanForm.testSuitId.length; j++) {
                document.testPlanForm.testSuitId[j].checked = false;
            }
        }
    } else if (document.testPlanForm.testSuitId != null) { // only 1
        document.testPlanForm.testSuitId.checked = isSelected;
    }
    return false;
}

function deleteTestPlans() {
    var selected = isTestPlanSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the test suits to be removed.');
        return;
    }
    if (allPlansSelected) {
        CARBON.showConfirmationDialog("Do you want to remove all test suits from this test plan?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.testPlanForm.action = '../controller/delete_from_plan_suit_mapping.jag';
                document.testPlanForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test suits from this test plan?",
            function () {
                document.testPlanForm.action = '../controller/delete_from_plan_suit_mapping.jag';
                document.testPlanForm.submit();
            }
        );
    }
}

function resetVars() {
    
    allPlansSelected = false;

    var isSelected = false;
    if (document.testPlanForm.testSuitId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testPlanForm.testSuitId.length; j++) {
            if (document.testPlanForm.testSuitId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testPlanForm.testSuitId != null) { // only 1 sg
        if (document.testPlanForm.testSuitId.checked) {
            isSelected = true;
        }
    }
    return false;
}           


