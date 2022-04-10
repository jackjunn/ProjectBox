<template>
  <div id="Search">
    <form class="form-inline"
          action="https://www.baidu.com/baidu"
          target="_blank">
      <input type="text"
             name=word
             autocomplete="off">
      <button type="submit"
              class="btn btn-link">
        <b-icon-search>
        </b-icon-search>
      </button>
    </form>
  </div>
</template>

<style>
#Search {
  padding-top: 20px;
}
button.btn-link,
input {
  color: #42b983;
}
input {
  width: 300px;
  display: inline-block;
  background: none;
  border: transparent;
  border-bottom: 1px solid #0f996b;
}
input:focus {
  border-bottom: 2px solid #ced4da;
  outline: none;
}
button:focus {
  outline: none;
  box-shadow: none;
}
input:-webkit-autofill {
  box-shadow: 0 0 0 1000px inset !important;
  -webkit-text-fill-color: #42b983 !important;
  caret-color: #42b983;
}
</style>
