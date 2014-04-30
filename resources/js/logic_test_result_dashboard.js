var allSelected = false;

//for samples
function isSelected() {
    var selected = false;
    if (document.testResultForm.jiraId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testResultForm.jiraId.length; j++) {
            selected = document.testResultForm.jiraId[j].checked;
            if (selected) break;
        }
    } else if (document.testResultForm.jiraId != null) { // only 1
        selected = document.testResultForm.jiraId.checked;
    }
    return selected;
}

function selectAllInJiraTable(isSelected) {
    allSelected = true;
    if (document.testResultForm.jiraId != null &&
        document.testResultForm.jiraId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testResultForm.jiraId.length; j++) {
                document.testResultForm.jiraId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testResultForm.jiraId.length; j++) {
                document.testResultForm.jiraId[j].checked = false;
            }
        }
    } else if (document.testResultForm.jiraId != null) { // only 1
        document.testResultForm.jiraId.checked = isSelected;
    }
    return false;
}

function deleteJira() {
    var selected = isSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the jira to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all jira?",
            function () {
//                location.href = '../controller/deleteProductVersions.jag?deleteAllWebapps=true&webappState=all';
                document.testResultForm.action = '../controller/deleteJiraTestResultDashboard.jag';
                document.testResultForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected jira?",
            function () {
                document.testResultForm.action = '../controller/deleteJiraTestResultDashboard.jag';
                document.testResultForm.submit();
            }
        );
    }
}

function editJira() {

    var selected = isSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the jira to be edited.');
        return;
    }
    var count=0;
	for(var j=0; j< document.testResultForm.jiraId.length; j++){
		if(document.testResultForm.jiraId[j].checked){
			count=count+1;
		}
	}
	if(count > 1){
		CARBON.showInfoDialog('Please select only one jira to edit.');
        return;
	}
	else{
		CARBON.showConfirmationDialog("Do you want to edit the selected test scenario?",
        function () {
            document.testResultForm.action = '../controller/editJira.jag';
            document.testResultForm.submit();
        }
    	);
	}
    
}


function resetVars() {
    allSelected = false;

    var isSelected = false;
    if (document.testResultForm.jiraId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testResultForm.jiraId.length; j++) {
            if (document.testResultForm.jiraId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testResultForm.jiraId != null) { // only 1 sg
        if (document.testResultForm.jiraId.checked) {
            isSelected = true;
        }
    }
    return false;
}