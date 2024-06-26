let pass = ''
let passConfirm = ''
let checkbox = ''

document.getElementById("password").addEventListener('keyup', function() {
  pass = this.value
})

document.getElementById("confirm-password").addEventListener('keyup', function() {
  passConfirm = this.value
  if (pass != passConfirm) {
    document.getElementById("confirm-password").setCustomValidity("Passwords need to match.")
  } else {
    document.getElementById("confirm-password").setCustomValidity("")
  }
})

document.getElementById("show-pass").addEventListener("click", function() {
  pass = document.getElementById("password")
  passConfirm = document.getElementById("confirm-password")
  checkbox = document.getElementById("show-pass")

  if(checkbox.checked) {
    pass.type = "text"
    passConfirm.type = "text"
  } else {
    pass.type = "password"
    passConfirm.type = "password"
  }
})

