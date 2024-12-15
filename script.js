//your JS code here. If required.
let colorSelect = document.querySelector("#colorSelect");
      let eleCount = colorSelect.children;
      let btn = document.querySelector('input[type="button"]');

      btn.addEventListener("click", removeOption);

      function removeOption() {
        for (let t of eleCount) {
          if (t.innerHTML == colorSelect.value) {
            t.remove();
          }
        }
      }