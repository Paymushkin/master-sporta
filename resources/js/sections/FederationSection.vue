<script setup lang="ts">
import FederationDashboard from '@/components/analytics/FederationDashboard.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import SportStripe from '@/components/ui/SportStripe.vue';
</script>

<template>
    <AppSection id="federation" theme="dark">
        <SportStripe side="right" />
        <AppContainer>
            <SectionHeader
                tone="dark"
                title="Единая картина<br>российского кикбоксинга"
                description="От отчётности — к управлению на основании данных."
            />
            <div class="mt-12 md:mt-16">
                <FederationDashboard />
            </div>
        </AppContainer>
    </AppSection>
</template>
