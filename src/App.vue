<template>
  <div>
    <div class="background" />

    <div>
      <header>
        <nav class="navigation">
          <ul class="container">
            <li><router-link to="History">History</router-link></li>
            <li><router-link to="Lineage">Lineage</router-link></li>
            <li><router-link to="Contact">Contact</router-link></li>
          </ul>
        </nav>

        <router-link class="header" to="/">
          <header class="container">
            <img class="temple" src="./assets/temple.jpg" alt="temple" />
            <h1 class="title">Hermetic Order of the Golden Dawn &#174; in North Carolina</h1>
            <img class="order" src="./assets/order.jpg" alt="order" />
          </header>
        </router-link>
      </header>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="less">
html {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
}

body {
  width: 80%;
  margin: 0 auto;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: #000 top center/151% no-repeat;
  background-image: url("./assets/background.jpeg");
}

.navigation {
  .container {
    width: 100%;
    margin: 0;
    padding-left: 0;

    * {
      margin: 0.5rem;
    }
  }

  * {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: linear-gradient(to bottom, #121212 0, #424242 40%, #474747 50%, #424242 60%, #121212 100%) no-repeat;

    &:visited {
      color: white;
    }
  }
}

.header {
  text-decoration: none;

  .container {
    * {
      display: inline-block;
      vertical-align: middle;
      margin: auto;
    }

    .title {
      font-size: 1.5rem;
      color: #596978;
      text-shadow: 0.7px 0.7px 0px rgba(217, 222, 227, 0.8), 1.4px 1.4px 0px rgba(217, 222, 227, 0.8), 2.1px 2.1px 1px rgba(217, 222, 227, 0.8), 2.8px 2.8px 0px rgba(217, 222, 227, 0.8), 3.5px 3.5px 0px rgba(217, 222, 227, 0.8);
    }

    .temple, .order {
      height: 9rem;
    }
  }
}
</style>
