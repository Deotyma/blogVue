<template>
  <header>
    <!-- Navbar -->
      <MDBNavbar expand="lg" light bg="white" container>
        <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
        <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
          <MDBNavbarItem to="#" active>
            Home
          </MDBNavbarItem>
          <MDBNavbarItem to="#">
            Features
          </MDBNavbarItem>
          <MDBNavbarItem to="#">
            Pricing
          </MDBNavbarItem>
          <MDBNavbarItem to="#">
            About
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBNavbar>
    <!-- Navbar -->

    <!-- Background image -->
    <div
      class="p-5 text-center bg-image"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg');
        height: 400px;
      "
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Heading</h1>
            <h4 class="mb-3">Subheading</h4>
            <MDBBtn tag="a" lg outline="light"
              href="#!"
              role="button"
              >Call to action
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
</template>

<script>
  import { MDBBtn, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBBtn,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem
    },
  };
</script>

<style>
 #app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>