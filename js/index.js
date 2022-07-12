let reset_btn = document.getElementById("reset_btn")
let resetable_checkboxes = document.getElementsByClassName("resetable_checkbox")
let resetable_dropdowns = document.getElementsByClassName("resetable_dropdown")
let checkbox_default_values = []
let dropdown_default_values = []

for (let i = 0; i < resetable_checkboxes.length; i++) {
    checkbox_default_values.push(resetable_checkboxes[i].checked)
}
for (let i = 0; i < resetable_dropdowns.length; i++) {
    dropdown_default_values.push(resetable_dropdowns[i].value)
}

reset_btn.addEventListener("click", function () {
    for (let i = 0; i < resetable_checkboxes.length; i++) {
        resetable_checkboxes[i].checked = checkbox_default_values[i]
    }
    for (let i = 0; i < resetable_dropdowns.length; i++) {
        resetable_dropdowns[i].value = dropdown_default_values[i]
    }
})

let save_btn = document.getElementById("save-btn-confirm")
save_btn.addEventListener("click", function () {
    alert("Сохранение успешно")
    let close_btn = document.getElementById("save-btn-close")
    close_btn.click()
})
