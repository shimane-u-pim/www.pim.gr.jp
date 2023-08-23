<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<script lang="ts">
import { Collapse } from 'bootstrap';
document.querySelectorAll('[data-bs-toggle="collapse"]')
    .forEach(collapse => {
        new Collapse(collapse)
    })
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="/static/logo/pimlogo.svg" :alt="t('shared.pim_full_name')" height="24">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                    <li class="nav-item">
                        <router-link to="/contacts" class="nav-link">{{ t('shared.contacts') }}</router-link>
                    </li>
                    <li class="nav-item border-end">
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/shimane_u_Pim" target="_blank">
                            <i class="bi bi-twitter"></i>
                            <span class="visually-hidden">Twitter</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/shimane_u_pim" target="_blank">
                            <i class="bi bi-instagram"></i>
                            <span class="visually-hidden">Instagram</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.youtube.com/channel/UCKcFtXDUQGi-z3DKBasYjMQ" target="_blank">
                            <i class="bi bi-youtube"></i>
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