<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import PageTitleСomponent from '@/components/PageTitleСomponent.vue';
import { minLength } from '@/validators/minLength';
import { mustBeTrue } from '@/validators/mustBeTrue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'





export default {
    setup() {
        return { v$: useVuelidate() }
    },
    components: {
        PageTitleСomponent,
        NavBarComponent

    },
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            agreement: true
        }
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return

            console.log({
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            });
            const message = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }

            fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)

            })

            this.name = ''
            this.email = ''
            this.phone = ''
            this.message = ''
            this.agreement = true

            this.v$.$reset()
        }
    },



    validations() {
        return {
            name: { required },
            phone: {},
            message: {
                required,
                maxLength: maxLength(30),
                minLength: helpers.withMessage('this value min 5', minLength)
            },
            email: { required, email },

            agreement: {
                mustBeTrue: helpers.withMessage(
                    'You must accept the offer agreement',
                    mustBeTrue
                )
            }
        }
    }
}


</script>

<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />

                    </div>
                </div>
                <PageTitleСomponent pageTitle='Contact us' />

            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="../assets/logo/Beans_logo_dark.svg" alt="Beans logo">

                        <form @submit.prevent="submit" action="/" class="mt-5">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.name.$model" type="text" class="form-control" id="name-input">
                                    <span class="align-items-center" v-for="error in v$.name.$errors"
                                        :key="error.$uid">{{ error.$message }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.email.$model" type="email" class="form-control" id="email-input">
                                    <span class="align-items-center" v-for="error in v$.email.$errors"
                                        :key="error.$uid">{{ error.$message }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="phone-input" class="mb-0">
                                        Phone

                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.phone.$model" type="tel" class="form-control" id="phone-input">
                                    <span class="align-items-center" v-for="error in v$.phone.$errors"
                                        :key="error.$uid">{{ error.$message }}</span>
                                </div>
                            </div>

                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-start">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea v-model="v$.message.$model" class="form-control" name="message"
                                        id="message" rows="5" placeholder="Leave your comments here"></textarea>
                                    <span class="align-items-center" v-for="error in v$.message.$errors"
                                        :key="error.$uid">{{ error.$message }}</span>
                                    <div class="form-check mt-3">
                                        <input v-model="v$.agreement.$model" class="form-check-input" type="checkbox"
                                            id="agreement">

                                        <label class="form-check-label" for="agreement">
                                            Согласен с договором оферты
                                        </label>

                                        <div v-for="error in v$.agreement.$errors" :key="error.$uid"
                                            class="text-danger">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>