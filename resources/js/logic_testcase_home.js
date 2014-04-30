var allSelected = false;


function isTestcaseSelected() {
    var selected = false;
    if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID[0] != null) { // there is more than 1
        for (var j = 0; j < document.testcasesForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
            selected = document.testcasesForm.WSO2_QAP_TEST_CASE_ID[j].checked;
            if (selected) break;
        }
    } else if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID != null) { // only 1
        selected = document.testcasesForm.WSO2_QAP_TEST_CASE_ID.checked;
    }
    return selected;
}

function isoneSelected(){

    var oneselected=false;
    var count=0;
    if(document.testcasesForm.WSO2_QAP_TEST_CASE_ID[0] != null)
    {
        for (var j = 0; j < document.testcasesForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
            var select = document.testcasesForm.WSO2_QAP_TEST_CASE_ID[j].checked;
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
    else if(document.testcasesForm.WSO2_QAP_TEST_CASE_ID != null)
    {
        oneselected=document.testcasesForm.WSO2_QAP_TEST_CASE_ID.checked;
    }


    if(count==1)
    {
        oneselected=true;
    }

    return oneselected;
}

function deleteTestcase() {
    var selected = isTestcaseSelected();
    if (!selected) {
        CARBON.showInfoDialog('Please select a testcase to be deleted.');
        return;
    }
    if (allSelected) {
        CARBON.showConfirmationDialog("Do you want to delete all testcases?",
            function () {
                //location.href = '../controller/deleteTestcase.jag?deleteAllWebapps=true&webappState=all';
                document.testcasesForm.action = '../controller/deleteTestcase.jag';
                document.testcasesForm.submit();
            }
        );
    } else {
        CARBON.showConfirmationDialog("Do you want to delete the selected testcase?  are you sure there is no test result entry for this test cases ?",
            function () {
                document.testcasesForm.action = '../controller/deleteTestcase.jag';
                document.testcasesForm.submit();
            }
        );
    }
}

function selectAllInThisPage(isSelected) {
    allSelected = false;
    if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID != null &&
        document.testcasesForm.WSO2_QAP_TEST_CASE_ID[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testcasesForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
                document.testcasesForm.WSO2_QAP_TEST_CASE_ID[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testcasesForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
                document.testcasesForm.WSO2_QAP_TEST_CASE_ID[j].checked = false;
            }
        }
    } else if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID != null) { // only 1
        document.testcasesForm.WSO2_QAP_TEST_CASE_ID.checked = isSelected;
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
    if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testcasesForm.WSO2_QAP_TEST_CASE_ID.length; j++) {
            if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID != null) { // only 1 sg
        if (document.testcasesForm.WSO2_QAP_TEST_CASE_ID.checked) {
            isSelected = true;
        }
    }
    return false;
}


function editTestcase()
{
    var selected = isTestcaseSelected();
    var oneselected=isoneSelected();
    if(!selected)
    {
        CARBON.showInfoDialog('Please select a testcase to edit');
        return;
    }
    else if(oneselected)
    {
        document.testcasesForm.action = 'editTestcase.jag';
        document.testcasesForm.submit();


    }else{
        CARBON.showInfoDialog('Please select only one testcase to edit');
        return;

    }
}
