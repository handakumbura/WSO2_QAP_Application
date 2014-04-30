var allSelected = false;


function isArtifactSelected() {
    var selected = false;
    if (document.artifactsForm.artifactId[0] != null) { // there is more than 1
        for (var j = 0; j < document.artifactsForm.artifactId.length; j++) {
            selected = document.artifactsForm.artifactId[j].checked;
            if (selected) break;
        }
    } else if (document.artifactsForm.artifactId != null) { // only 1
        selected = document.artifactsForm.artifactId.checked;
    }
    return selected;
}


function isoneSelected(){

    var oneselected=false;
    var count=0;
    if(document.artifactsForm.artifactId[0] != null)
    {
        for (var j = 0; j < document.artifactsForm.artifactId.length; j++) {
            var select = document.artifactsForm.artifactId[j].checked;
            if (select)
            {
                count=count +1;
                if(count>1)
                {
                    oneselected=false;
                    break;
                }
            }
        }


    }
    else if(document.artifactsForm.artifactId != null)
    {
        oneselected=document.artifactsForm.artifactId.checked;
    }


    if(count==1)
    {
        oneselected=true;
    }

    return oneselected;
}

function deleteArtifacts() {
    var selected = isArtifactSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the artifacts to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all artifacts?",
            function () {
                document.artifactsForm.action = '../controller/deleteArtifacts.jag';
                document.artifactsForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected artifacts",
            function () {
                document.artifactsForm.action = '../controller/deleteArtifacts.jag';
                document.artifactsForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.artifactsForm.artifactId != null &&
        document.artifactsForm.artifactId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.artifactsForm.artifactId.length; j++) {
                document.artifactsForm.artifactId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.artifactsForm.artifactId.length; j++) {
                document.artifactsForm.artifactId[j].checked = false;
            }
        }
    } else if (document.artifactsForm.artifactId != null) { // only 1
        document.artifactsForm.artifactId.checked = isSelected;
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
    if (document.artifactsForm.artifactId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.artifactsForm.artifactId.length; j++) {
            if (document.artifactsForm.artifactId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.artifactsForm.artifactId != null) { // only 1 sg
        if (document.artifactsForm.artifactId.checked) {
            isSelected = true;
        }
    }
    return false;
}

function editArtifact()
{
    var selected = isArtifactSelected();
    var oneselected=isoneSelected();



    if(!selected)
    {
        CARBON.showInfoDialog('Please select a artifact to edit');
        return;
    }
    else if(oneselected)
    {
        document.artifactsForm.action = 'edit_artifact.jag';
        document.artifactsForm.submit();


    }else{
        CARBON.showInfoDialog('Please select only one artifact to edit');
        return;

    }
}