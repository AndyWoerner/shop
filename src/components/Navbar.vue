<template>
    <nav class="navbar navbar-expand-lg bg-vue">
        <div class="container">
            <a href="" class="navbar-brand">Andys Shop</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a href="" class="nav-link">Shop</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="" class="nav-link"><i class="fas fa-sign-in-alt mr-2"></i>Login</a>
                </li>
                <li class="nav-item bg-vue2 ml-4 rounded">
                    <a href="" class="nav-link">
                        <i class="fas fa-cart-arrow-down"></i>6 Artikel (120.34€)
                    </a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    a {
        color: white
    }
    a:hover {
        opacity: 0.3;
        transition: all .3s ease 0s;
    }
</style>