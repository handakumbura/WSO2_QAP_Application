var allScenariosSelected = false;

function isTestScenarioSelected() {
    var selected = false;
    if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.length; j++) {
            selected = document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[j].checked;
            if (selected) break;
        }
    } else if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID != null) { // only 1
        selected = document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.checked;
    }
    return selected;
}

function selectAllInScenarioTable(isSelected) {
    allScenariosSelected = true;
    if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID != null &&
        document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.length; j++) {
                document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.length; j++) {
                document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[j].checked = false;
            }
        }
    } else if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID != null) { // only 1
        document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.checked = isSelected;
    }
    return false;
}

function resetVars() {
    allScenariosSelected = false;

    var isSelected = false;
    if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.length; j++) {
            if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID != null) { // only 1 sg
        if (document.testSuitScenarioMappingForm.WSO2_QAP_TEST_SCENARIO_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}         
