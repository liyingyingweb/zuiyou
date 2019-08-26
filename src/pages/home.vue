<template>
  <f7-page name="home">
    <f7-navbar title="Home"></f7-navbar>
    <!-- Page content -->
    <f7-link href="/about/">About Page</f7-link>
    <br>
    <f7-link href="/login/">Login Page</f7-link>

    <f7-list>
      <f7-list-item link="/about/" title="About Page"></f7-list-item>
      <f7-list-item link="/login/" title="Login Page"></f7-list-item>
      <f7-list-item link="/about/" title="About Page"></f7-list-item>
      <f7-list-item link="/login/" title="Login Page"></f7-list-item>
      <f7-list-item link="/about/" title="About Page"></f7-list-item>
      <f7-list-item link="/login/" title="Login Page"></f7-list-item>
      
    </f7-list>

  </f7-page>
</template>
<script>
export default {
  mounted() {
    // this.$f7ready((f7) => {
    //     f7.dialog.alert('大家好');
    // });
  },
  methods: {
    // tankuang(){
    //     // this.$f7.dialog.alert('mai mai mai!' + JSON.stringify(this.$device));
    //     alert(console.log(this.f7router));
    // }
  }
};
</script>

