var allSelected = false;


function isTestScenarioSelected() {
    var selected = false;
    if (document.testScenarioForm.scenarioId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testScenarioForm.scenarioId.length; j++) {
            selected = document.testScenarioForm.scenarioId[j].checked;
            if (selected) break;
        }
    } else if (document.testScenarioForm.scenarioId != null) { // only 1
        selected = document.testScenarioForm.scenarioId.checked;
    }
    return selected;
}

function deleteTestScenario() {
    var selected = isTestScenarioSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the applications to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all test scenarios?",
            function () {
                //location.href = '../controller/deleteProducts.jag?deleteAllWebapps=true&webappState=all';
                document.testScenarioForm.action = '../controller/deleteTestScenario.jag';
                document.testScenarioForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected test scenarios?",
            function () {
                document.testScenarioForm.action = '../controller/deleteTestScenario.jag';
                document.testScenarioForm.submit();
            }
        );
    }
}

function editTestScenario() {

    var selected = isTestScenarioSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the test scenario to be edited.');
        return;
    }
    var count=0;
	for(var j=0; j< document.testScenarioForm.scenarioId.length; j++){
		if(document.testScenarioForm.scenarioId[j].checked){
			count=count+1;
		}
	}
	if(count > 1){
		CARBON.showInfoDialog('Please select only one test scenario to edit.');
        return;
	}
	else{
		CARBON.showConfirmationDialog("Do you want to edit the selected test scenario?",
        function () {
            document.testScenarioForm.action = '../controller/editTestScenario.jag';
            document.testScenarioForm.submit();
        }
    	);
	}
    
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.testScenarioForm.scenarioId != null &&
        document.testScenarioForm.scenarioId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testScenarioForm.scenarioId.length; j++) {
                document.testScenarioForm.scenarioId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testScenarioForm.scenarioId.length; j++) {
                document.testScenarioForm.scenarioId[j].checked = false;
            }
        }
    } else if (document.testScenarioForm.scenarioId != null) { // only 1
        document.testScenarioForm.scenarioId.checked = isSelected;
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
    if (document.testScenarioForm.scenarioId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testScenarioForm.scenarioId.length; j++) {
            if (document.testScenarioForm.scenarioId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testScenarioForm.scenarioId != null) { // only 1 sg
        if (document.testScenarioForm.scenarioId.checked) {
            isSelected = true;
        }
    }
    return false;
}

