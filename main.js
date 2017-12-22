var checkBoxes = document.querySelectorAll(".radio-pjf")
var num = 5
var saveButton   = document.querySelector("#btn_xspj_bc")

checkBoxes.forEach((item, index) => {
  if (index % num === 0) {
    item.checked = true
  }
})

checkBoxes[checkBoxes.length - num + 1].checked = true
saveButton.click()
