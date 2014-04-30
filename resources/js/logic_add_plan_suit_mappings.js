var allPlansSelected = false;

function isTestSuitSelected() {
    var selected = false;
    if (document.testSuitPlanMappingForm.testSuitId[0] != null) { // there is more than 1
        for (var j = 0; j < document.testSuitPlanMappingForm.testSuitId.length; j++) {
            selected = document.testSuitPlanMappingForm.testSuitId[j].checked;
            if (selected) break;
        }
    } else if (document.testSuitPlanMappingForm.testSuitId != null) { // only 1
        selected = document.testSuitPlanMappingForm.testSuitId.checked;
    }
    return selected;
}

function selectAllInSuitTable(isSelected) {
    allBuildsSelected = true;
    if (document.testSuitPlanMappingForm.testSuitId != null &&
        document.testSuitPlanMappingForm.testSuitId[0] != null) { // there is more than 1
        if (isSelected) {
            for (var j = 0; j < document.testSuitPlanMappingForm.testSuitId.length; j++) {
                document.testSuitPlanMappingForm.testSuitId[j].checked = true;
            }
        } else {
            for (j = 0; j < document.testSuitPlanMappingForm.testSuitId.length; j++) {
                document.testSuitPlanMappingForm.testSuitId[j].checked = false;
            }
        }
    } else if (document.testSuitPlanMappingForm.testSuitId != null) { // only 1
        document.testSuitPlanMappingForm.testSuitId.checked = isSelected;
    }
    return false;
}

function resetVars() {
    allSelected = false;

    var isSelected = false;
    if (document.testSuitPlanMappingForm.testSuitId[0] != null) { // there is more than 1 sg
        for (var j = 0; j < document.testSuitPlanMappingForm.testSuitId.length; j++) {
            if (document.testSuitPlanMappingForm.testSuitId[j].checked) {
                isSelected = true;
            }
        }
    } else if (document.testSuitPlanMappingForm.testSuitId != null) { // only 1 sg
        if (document.testSuitPlanMappingForm.testSuitId.checked) {
            isSelected = true;
        }
    }
    return false;
}         
