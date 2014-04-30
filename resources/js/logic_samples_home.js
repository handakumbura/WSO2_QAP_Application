var allSelected = false;


function isSamplesSelected() {
    var selected = false;
    if (document.sampleForm.WSO2_QAP_SAMPLE_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.sampleForm.WSO2_QAP_SAMPLE_ID.length; j++) {
            selected = document.sampleForm.WSO2_QAP_SAMPLE_ID[j].checked;
            if (selected) break;
        }
    } else if (document.sampleForm.WSO2_QAP_SAMPLE_ID != null) { // only 1
        selected = document.sampleForm.WSO2_QAP_SAMPLE_ID.checked;
    }
    return selected;
}

function isoneSelected(){

    var oneselected=false;
    var count=0;
    if(document.sampleForm.WSO2_QAP_SAMPLE_ID[0] != null)
    {
        for (var j = 0; j < document.sampleForm.WSO2_QAP_SAMPLE_ID.length; j++) {
            var select = document.sampleForm.WSO2_QAP_SAMPLE_ID[j].checked;
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
    else if(document.sampleForm.WSO2_QAP_SAMPLE_ID != null)
    {
        oneselected=document.sampleForm.WSO2_QAP_SAMPLE_ID.checked;
    }


    if(count==1)
    {
        oneselected=true;
    }

    return oneselected;
}

function deleteSamples() {
    var selected = isSamplesSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select the samples to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all samples?",
            function () {

                document.sampleForm.action = '../controller/deleteSample.jag';
                document.sampleForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected samples?",
            function () {
                document.sampleForm.action = '../controller/deleteSample.jag';
                document.sampleForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.sampleForm.WSO2_QAP_SAMPLE_ID != null &&
        document.sampleForm.WSO2_QAP_SAMPLE_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.sampleForm.WSO2_QAP_SAMPLE_ID.length; j++) {
                document.sampleForm.WSO2_QAP_SAMPLE_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.sampleForm.WSO2_QAP_SAMPLE_ID.length; j++) {
                document.sampleForm.WSO2_QAP_SAMPLE_ID[j].checked = false;
            }
        }
    } else if (document.sampleForm.WSO2_QAP_SAMPLE_ID != null) { // only 1
        document.sampleForm.WSO2_QAP_SAMPLE_ID.checked = isSelected;
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
    if (document.sampleForm.WSO2_QAP_SAMPLE_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.sampleForm.WSO2_QAP_SAMPLE_ID.length; j++) {
            if (document.sampleForm.WSO2_QAP_SAMPLE_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.sampleForm.WSO2_QAP_SAMPLE_ID != null) { // only 1 sg
        if (document.sampleForm.WSO2_QAP_SAMPLE_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}

function editSample()
{
    var selected = isSamplesSelected();
    var oneselected=isoneSelected();



    if(!selected)
    {
        CARBON.showInfoDialog('Please select a sample to edit');
        return;
    }
    else if(oneselected)
    {
        document.sampleForm.action = 'edit_sample.jag';
        document.sampleForm.submit();


    }else{
        CARBON.showInfoDialog('Please select only one sample to edit');
        return;

    }
}

