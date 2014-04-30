var allSelected = false;


function isJiraSelected() {
    var selected = false;
    if (document.jiraForm.jiraId[0] != null) { // there is more than 1
        for (var j = 0; j < document.jiraForm.jiraId.length; j++) {
            selected = document.jiraForm.jiraId[j].checked;
            if (selected) break;
        }
    } else if (document.jiraForm.jiraId != null) { // only 1
        selected = document.jiraForm.jiraId.checked;
    }
    return selected;
}

function deleteJira() {
    var selected = isJiraSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select jira to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all jira?",
            function () {
                document.jiraForm.action = '../controller/deleteJira.jag';
                document.jiraForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete selected jira?",
            function () {
                document.jiraForm.action = '../controller/deleteJira.jag';
                document.jiraForm.submit();
            }
        );
    }
}

function editJira() {

    var selected = isJiraSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the jira to be edited.');
        return;
    }
    var count=0;
	for(var j=0; j< document.jiraForm.jiraId.length; j++){
		if(document.jiraForm.jiraId[j].checked){
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
            document.jiraForm.action = '../controller/editJira.jag';
            document.jiraForm.submit();
        }
    	);
	}
    
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.jiraForm.jiraId != null &&
        document.jiraForm.jiraId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.jiraForm.jiraId.length; j++) {
                document.jiraForm.jiraId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.jiraForm.jiraId.length; j++) {
                document.jiraForm.jiraId[j].checked = false;
            }
        }
    } else if (document.jiraForm.jiraId != null) { // only 1
        document.jiraForm.jiraId.checked = isSelected;
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
    if (document.jiraForm.jiraId[0] != null) { // there is more than 1 
        for (var j = 0; j < document.jiraForm.jiraId.length; j++) {
            if (document.jiraForm.jiraId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.jiraForm.jiraId != null) { // only 1 sg
        if (document.jiraForm.jiraId.checked) {
            isSelected = true;
        }
    }
    return false;
}

