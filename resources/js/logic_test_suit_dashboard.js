var allTestScenariosSelected = false;


function isTestScenarioSelected() {
    var selected = false;
    if (document.testScenariosForm.testScenarioId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
            selected = document.testScenariosForm.testScenarioId[j].checked;
            if (selected) break;
        }
    } else if (document.testScenariosForm.testScenarioId != null) { // only 1
        selected = document.testScenariosForm.testScenarioId.checked;
    }
    return selected;
}


function selectAllInTestScenarioTable(isSelected) {
    allTestPlansSelected = true;
    if (document.testScenariosForm.testScenarioId != null &&
        document.testScenariosForm.testScenarioId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
                document.testScenariosForm.testScenarioId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
                document.testScenariosForm.testScenarioId[j].checked = false;
            }
        }
    } else if (document.testScenariosForm.testScenarioId != null) { // only 1
        document.testScenariosForm.testScenarioId.checked = isSelected;
    }
    return false;
}

function deleteBuildTestScenarios() {
    var selected = isTestScenarioSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the test scenarios to be deleted.');
        return;
    }
    if (allTestScenariosSelected) {
        CARBON.showConfirmationDialog("Do you want to delete the selected test scenarios?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.testScenariosForm.action = '../controller/delete_test_scenario_suit_mapping.jag';
                document.testScenariosForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test scenarios?",
            function () {
                document.testScenariosForm.action = '../controller/delete_test_scenario_suit_mapping.jag';
                document.testScenariosForm.submit();
            }
        );
    }
}

function resetVarsTestScenario() {
    allTestPlansSelected = false;

    var isSelected = false;
    if (document.testScenariosForm.testScenarioId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testScenariosForm.testScenarioId.length; j++) {
            if (document.testScenariosForm.testScenarioId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testScenariosForm.testScenarioId != null) { // only 1 sg
        if (document.testScenariosForm.testScenarioId.checked) {
            isSelected = true;
        }
    }
    return false;
}		
