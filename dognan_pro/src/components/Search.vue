<template>
  <div id="Search">
    <form class="form-inline"
          action="https://www.baidu.com/baidu"
          target="_blank">
      <input type="text"
             name=word
             autocomplete="off">
      <b-button type="submit"
                variant="outline-primary">
        <b-icon-search>
        </b-icon-search>
      </b-button>
    </form>
  </div>
</template>

<style>
#Search {
  padding-top: 20px;
}

input {
  width: 300px;
  display: inline-block;
  background: none;
  border: transparent;
  border-bottom: 1px solid gray;
  color: gray;
}
input:focus {
  border-bottom: 2px solid #0f996b;
  outline: none;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 1000px inset !important;
  -webkit-text-fill-color: #42b983 !important;
  caret-color: #42b983;
}
</style>
