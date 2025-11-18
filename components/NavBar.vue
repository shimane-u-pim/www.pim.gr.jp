<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <NuxtLink to="/" class="navbar-brand">
                <img src="/logo/pimlogo.svg" alt="島根大学ものづくり部 Pim" height="24">
            </NuxtLink>
            <button
class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"/>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                    <li class="nav-item">
                        <NuxtLink to="/contacts" class="nav-link">入部・お問い合わせ</NuxtLink>
                    </li>
                    <li class="nav-item border-end"/>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/shimane_u_Pim" target="_blank">
                            <i class="bi bi-twitter"/>
                            <span class="visually-hidden">Twitter</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/shimane_u_pim" target="_blank">
                            <i class="bi bi-instagram"/>
                            <span class="visually-hidden">Instagram</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.facebook.com/Shimane.Pim" target="_blank">
                            <i class="bi bi-facebook"/>
                            <span class="visually-hidden">Facebook</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.youtube.com/channel/UCKcFtXDUQGi-z3DKBasYjMQ" target="_blank">
                            <i class="bi bi-youtube"/>
                            <span class="visually-hidden">YouTube</span>
                        </a>
                    </li>
                    <!--
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Language
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0)" @click="locale = 'ja'">Japanese</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0)" @click="locale = 'en'">English (Partial)</a></li>
                        </ul>
                    </li>
                    -->
                </ul>
            </div>
        </div>
    </nav>
</template>
