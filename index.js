const { default: axios } = require("axios");
const data = require("./response.json")


let url = "https://chatgpt.com/backend-api/conversations"
let limit = 3;
let offset = 0;
let order = "updated"
let total = 0;

let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJwd2RfYXV0aF90aW1lIjoxNzI3MTUxMjM0MDM1LCJzZXNzaW9uX2lkIjoiT3ZYSGt5Tk9LM0czSVJJU3pHTWg1ZzgwNk9oMU1HOEQiLCJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjaG9vc3Vra2VuMTM5MjU0NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLTE4UkIwOEVYTXFlT3RjZUg0TlR6d2NIVCIsInVzZXJfaWQiOiJ1c2VyLVk4VW5vR3E2bmR3cnU2ZVFsbjRQTEJ4YSJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDgxNjczMzkyNDU2OTYyODU1NjkiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzI3MTUxMjM1LCJleHAiOjE3MjgwMTUyMzUsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSBvZmZsaW5lX2FjY2VzcyIsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIn0.xhQdZMMxN7YRHcT5UjRNgpLRm-0RGdF4xR6UkPbYpi3orRsS1ztBr0-s0Dd1cSD5w2unVFO6qMRHnjjkuuILD2aw3WI6z7nxGcxUwImRithMdklCkaeIyKNyEDqikwSbsJpfFSShF3q8Z9JeWKJUKs0xlaYR7khsLgGBv43MGHG6-jvs4V_aItBzqd_6q9x-BedLlyqGu6ug16umI3ntUB_m9g8NCqEY4xw-Lo1T_AMjrA01IxTXiMCLSUhVrFPPb2f2pKc4AdVaQRnJJhaoYQqspKRm4KyW_mzT3HfnMFz-S0Tyd6tDG6hABWebSruvpYfTmQiLujnIR8V4Bijbbg"

let url_path = new URL(url)

url_path.searchParams.append("offset", offset)
url_path.searchParams.append("limit", limit)
url_path.searchParams.append("order", order)

const get_conversation = async () => {

    let res = await fetch("https://chatgpt.com/backend-api/conversations?offset=0&limit=28&order=updated", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,th;q=0.8",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "oai-device-id": "3348fa8b-76ae-4fef-a791-0531b400bb49",
            "oai-language": "en-US",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "oai-dm-tgt-c-240329=2024-04-02; intercom-device-id-dgkjq2bp=1301655a-02b7-4bda-9e81-61cbe3ca6c5e; oai-did=3348fa8b-76ae-4fef-a791-0531b400bb49; oai-hlib=true; __Host-next-auth.csrf-token=e0d5ea7557cfc3465450209e5b5c78875677e0be8a9a50654ef9727e753930d5%7C17b6f7c442772327621761c6ad4cf0c47879933f3986264a5cd60f7bb687f6c3; __Secure-next-auth.callback-url=https%3A%2F%2Fchat-onramp.unified-6.api.openai.com; __cflb=0H28vzvP5FJafnkHxj4S2zYufVTKu2UYKxuEkC3zqYZ; cf_clearance=U8gBKrH8jC_clRU1__nPOA8W8_Az15dJWT4r6tscZIE-1727146415-1.2.1.1-XeOKsWIW3vPAa4FCXZ9yjJskKmR5ltXP1WDQgByr1iwFVOC8kF2LBZ2aYtiu0wfV6XEpsvxKjW95qI_aOkbABhhDI3XmRNYXTblp1As92aGXU8Ff0eWHSjQpIio6pekspzJZwtUCKZoebPjLAqwwX3AQbI5XtMVMfkEF5d5fey5wBndss1VM3jD.Jf1BT1iTKcM_bYYQtvWo6I2ClYGs75CiCrURU_VrMZ046ToD4L41HkkNHzjGSyROjAgMu0Pr0nQSr1BzS1SECxK9esxoQHsD25QQGMi_eCE_PirTUkdhiSHqlwZA267WDrmKT853ddONDy4pHLNi5trpq7bI2wfY1DdZboXPxyQSpnAAJgz1zJ8tb.UHgF2QR9DR3uTN.Jxi801XqWY0Hs1Jrch8RuyVoMCtZZhWTDZ3GOMxOmE; _uasid=\"Z0FBQUFBQm04aXJTSWcwZWxuTDZ6aU1abVExYXZmNFhTVDZvVG5CbXM5V0ZTa2Mtczl2dXozbGdmdmVjVDJuUHVBTHVyd0xBNjl1T0pGQVp1d0JKSnpyTWRwd283Z1A5SXZWN2FRcDBZT2hDX1NVT1p6T0Q3S0NmT0VyR2dqRDB3bWxPQmNjSEpxVmxvak1IQWNOWHFZalkwS2diSzZIWGY3TGlpTzczcjFDTzd1cmxfRXM3VHdKeUxXNjI0RmVmVjdLVTllUF9UN3VWZXBSenR3OWF3Y1dXQ21yU1NQT29QWnRNQmJVVTRzNFZiZkFQVkt1OFZ3ZWppTVE2cGlnclY0b2NQUDZzeE4zejdaRjN5U1kwNWQ3UTM5djFXeXdZWUVKYVdmQTRuX2FGOWhfbzhGQjEtR0d2TTRuZ016TE1XR2tMQ3NnVHhWZUdEVkRRclRYOGdRWDdid2pwVWx2M053PT0=\"; _umsid=\"Z0FBQUFBQm04aXJTU1VJWTEycllJUF8wSWpaNGk0SDMzS1NOcWdwOWlLOWNYOFVaYnF3TUhhaTlFS083UlB4NGxiZDYwNk5iZTNGVVMtdzkwMGtsWjhrVmY3TWhZTUFYSlZ6YW9xLTA5NGM3eG1ZcDJTUEEtc0xFaGxUUnVaeVg5VmlEekU2ZXFrci1uRmhYU1AtZzhlQnluclBfUVFMY1RqbktGV1F6cEhaOWNGai1NUUVqcFRLWWJ0ei14V24wRlZNa0pSM25aSk93a2ItdmVjdm9LV0NkamVBS2lsbUZiLUJ0aWpoOWgyTHFZcjltSmxyd3VTdz0=\"; __cf_bm=8SY0EETyEPzBBf_OJyzD6OCYJD1v2x1KD9zva1Afi5E-1727147525-1.0.1.1-9YajMHpajZdDwvI4EJNW8sFPvlbaw_ruFeCGxncamRi3Z2oBhFLy07Cv6ERLPZvkkfaxouJvOpPd_50afLyCzw; _cfuvid=kjkafHneiv6UGUUdl.OTaF0OUq4DtR6xUFO6gz3zLgs-1727147525551-0.0.1.1-604800000; oai-nav-state=1; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..cLH3b5bNVpBruq1m.PTVipL5ZyJYtpghbIDtMyQ0XYrXl8ulqoXIsoaKaKmznWLgvJR5zvALhDIVaRg0yf42Axp_XfIxStG1sNm_qvQZAqx-fT_W8WoniUMf_a5YK79hkxhD4zzxK-T0p9Y6M5i-t5-tFpZv6EsQs3e1DmwAQBAvw_XLccN0hY6lqbwjZonk0SKpgc8MmnlvwXuWsdQJSQSdsDTDJCaqByeyOhelCx6FQNtWmlBj61fkPKgTAQefpsTV_YDAfoP0vY7ZPtcJB5-hCi1fgd-Oljz8B-e7fte-a1TGucuk7g-e0zL8quObTNC2Z8n-kgpE3wwtMmH5_SDhSPjw5CjJG57PP9qvHfFDsro6Lqc-ONx38jqjIVqFGtOW1olj_9--u226QMs2rb4YqJGWrd9qQNMyKO1-EMnxAElD0A8Cc61kCBztbADSCtbws2QZVD7KerLZeaxww7IS6RecEDsTZNaNVni1lRp6EVSrsmvXCfvKyCt8vMzev5II24lwQWvD7bT9OYQBfSaCi6DZ4vcwtXb4MOBbErvkHTe1hCUn13OIKKr2EzKSLY1idqnkqcX6-1DYos5TjuR4pKg611BrmWIsvuZ4vKsIyqdCzNRvvNkUbuM-C2aKtkQbP_B4uNBNhY77Vew4sU5a53WsYKIYPxbb9bCOdokDTVzNSEMf-bKXcvpKGZjDIb5UYoPDPBk-V-xWcMLIGw1xie1Mvq-5g0TarrjBqXhBqU-4INy1FzoV7sG_nAVvyOHv-p_fxQN5PBi5lblszyQXrpC0Gvxk5bFNuv-0hENrj3Ui70sYqf__m6mZHsl9wNtATS7wtcD664yFHuSmCjUWlb3HPQgAq3yCwW4-SGNW0itS_DviJvC1JIrE5bt4VVEt56kxzD_UxD7-SeLYVLUpxTtyqPvpAOC_ROB08t3XCUrfAsSPUTrTJhayl6G0tJf-ceg6YJCJ03zYpg-aTrrJhiv7_aVoRyqTuOE_p8nIWbm-KNZVp9ZLzT0VdCDDeynNwfdRGku5gjzy-mWVx5KSRkOc8TeCuizklWdLIwfb-MtZtrSis8YCzcztMLJBiJnDuG9Hlu53-KPNHjuX3-1kDdVcpY6c44n8nrIa5GEp_cYQS_33eiOCLSPpry44D_qRGuf4NFs_ns1VY5hXm_gqf03yAtqclQMoiPdhOFL_e8DLYv7XUT6EASUs8EpR7pevSuJF-iEw8GTrASXJyKn3RNvVFdwDr166L4cosDZ6UQk2OgB2X8hfxnFW3zebseqVGqPpAGyQMGbRbO0J84mG4hgHhTI0Z7-vcTkK0rJdHGRoLI-87uPS9WA-ZyukbuBRVsFLxaySJA7LF50OA3qdR2jFssd2G093AUIPlQ6HoyG2M3cPwjCkKa4dZswjHmkvD4KwGqCktM1BfcrWJXTnxzuuLTZ2ShWDIZDnGUsfeuo6HL6fSgF3sP9bJ_rWmXKXrqj_zRAVhELcQc-rPKYGLvyPxpJquAvFFNWp0oSX8LO4sjRxUZ58imWGEnvrGxTcqI4hFug-0oiPUbuAqLTXguJzqAULw6Ggk1F__aWwJDhebImFBGGdJTnHf3_HryQah2jc09kUGXKWac-IWNDgAh2Vs7-WZKqajLCgim_wEJfgHC5OhDlYCPW1_iq2qu12cVg1xWgsqTjR3_KDYiDMadmbBWmebT5-pzMzhWCdhwB5wDDxnjz4Sa9WaADfeXMjEpT22fU9yJOO91Wr5M2ax3bx2zbo7zjew3gsEmBn37ZLNljJNu_o1O-UuRSXHSFraXdY9N2odE8PeHDM4RGVOnc1V_6XPOo8zV8--rfmOcL0puWz05vTEVDieMry7Vnfx6UuBdqEfYktPHIYyhiVo9ozF8ENX5LFLdugl-e_diS73QHwwlkLFLgDG3f8KnSDyjrTr2zmDqrCxgjfoc62HeTwCz2QtxXvBai200Rk7mLwYxo_2bXIZRdbiehJ1Hl8Wqq3XbHV487tl49IxhLkEzDg8kLYeLDkJYKPbY9FpisXaM2z3TtZo_3t2ms-fkQlzOBH-5KPbyFb32Wy57JnrVtkeHNhstAsNJ117HmaQxb4F4PDks48ip3n3YXXH89cBgYLmakcJ6GhmfLst3ISW2Vp0w0lc7VfSwqLbbKIo747iXkCTLHSwNiRtCoNGMCyR5QCyMeR_BJlpGND5GeYY72zIfl59cdcYqeJHtyIVtyxU7Zi5wbv19Anzu4u9CKH5dd7vCLyH5ECwuqbNA5ehDz6ws_h6kZnUSPPcQ3A2yzRG3Zw6SnA6lXZ9nYZNLEg18m7F9TRLLXyOiuqMwbQ2MRZWYDHAnIB5NcZMkdJV_wA7zxz4J9e7df376pBceX61sqdpC2ikygpYse7f9y-oVTJqMJbJ0BuPu2cvCb1BgTdE0iUh6Sup8pM_UJpCORZPradT6G9hNviJEplYnLcFb3a15NZ6B0yQXSIshfIeM9hXGk8COd-EwunbYxXCoiJ49MTddfGkq4NQ42AWr2tW3tOw1Xm4jXN9pRpYbmMArWu66znLwX6UVH6hN_q4HD5m7WwEQEqKR9Yj6EbFaVsD1xh241uMhUF8f8K8iu26RuqzMmd8_bblAu42YkPNICfMFZGuLLd_mZdYLRSKdA7hK2lOLOmAPss8R-klLJDwbHBNaDYYzMjer-ncRNBPl0e828djFPtmFwWD713k3HZ3hxIuGRVOHdt53SLVMtPDr-iQEzfDUvx_Jk6aw4siYNDiilInKYAZPqsm9sOr09zCmB3bNEZ19N53N3fiFlD4rl_dTd8eiTBu2Kz7HEMbFdfCOp1tw_x40CCfcEc1nGNkkcPd6lwQo_utIh7vDoMhvdggzYT6Aa22oZxepm1cuOg8JOZnU-xiqDG0DFYH10rCMxUmNQeZ1cg90F0BZlUyELorEC-coSV8iwId.XWyCNOGVXirYHQHZEoWGfQ; _dd_s=rum=2&id=1a611dea-b855-4400-8edc-231c5c59be56&created=1727146410512&expire=1727148536154&logs=1",
            "Referer": "https://chatgpt.com/c/66f229e2-058c-800d-8181-93089698b30e",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    })

    let data = await res.json()

    return data

}

const delete_id_conversation = async (id) => {
    let res = await fetch(`https://chatgpt.com/backend-api/conversation/${id}`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,th;q=0.8",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "content-type": "application/json",
            "oai-device-id": "3348fa8b-76ae-4fef-a791-0531b400bb49",
            "oai-language": "en-US",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-datadog-origin": "rum",
            "x-datadog-parent-id": "8322107508717683919",
            "x-datadog-sampling-priority": "1",
            "x-datadog-trace-id": "9170264493478270364",
            "cookie": "oai-dm-tgt-c-240329=2024-04-02; intercom-device-id-dgkjq2bp=1301655a-02b7-4bda-9e81-61cbe3ca6c5e; oai-did=3348fa8b-76ae-4fef-a791-0531b400bb49; oai-hlib=true; __Host-next-auth.csrf-token=e0d5ea7557cfc3465450209e5b5c78875677e0be8a9a50654ef9727e753930d5%7C17b6f7c442772327621761c6ad4cf0c47879933f3986264a5cd60f7bb687f6c3; __Secure-next-auth.callback-url=https%3A%2F%2Fchat-onramp.unified-6.api.openai.com; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..BPTa7HG8HmRY36Nk.10HUmoX4idvvbxxx-YVhsEQNhxzXTSYJFBwEN87noFyz4cTOCt9Ly_N4rR0HjnJgecDKx8dt5OxK50FYNByTVurLAHIxPAzNCFLYfBOQO3WLPd6iArydPACyfN8JRROqwLE2-qsg4jwgm_SoxfeorTDTOmqcvLVtrfqjAnQ9kRrN8jNare7xMvJ59HupbeISmaHMooBQsudQgiSo7txQGlvB-lJ82bSU-evHni3vzH_CLZg3GfZYNVACvks7q63Y020zQdiw0ntWIaq_AajNMiaUFo8h6OJqQFkXvOKRmQm0z8vhoK2BxPjgahc5cbzPFJgtGQtWI-vqTaGPYBcbwIvFD0jC3LsfRAMPCy-6PNOHb13Qmc800lBPj7SyHRCr7K5FdPk5QNY20PxWyA4yQwWRxn_45Yi8VjMVCpeCjC9u5LXEQeCdWD2Tl-qmzxC-MMUsyqnfv21DRaQVrWbWpOCZbKDodWW6kQtvFk6rZ8FGmw_NcwNFC9o5unEBP1vm0BSK0DhD6LmYEQ8HtfR4P5PuPjpi6xJEffpALax-K22tbkw8jd1XPi_pPVrMIyCVc9WIVO4SKcSElGEOYCs7cT-BteW2tquRzuQdQFOViUjFPclIWM6YLQgBO-zNlJ_Hp0ptxhuZBZh9XkTs2CZqIHik4YAFiyNt97A80R9O03RgOiFDbQVC-f5GrxO-q8OExm3KYZXKJrK5YgYIWQcoDHAOQTciEHE5ycpLeEiQ1HJF49F6pR1Pwe031iKp8RxTMNwU5Z9dqzTrL_3x2g4GYYEpZwCcGoSvvS2YcWJvaQNFF5uftJoSucxh_C4Uqx-wDuMamUVtQ5fCaWvzmracbIlxo8ApG_fFD8d1nGB97IuK25bHA6VR2lPNzMZ37DUHPUNkxsCCEQmxcmcO3iorINKzpZC6uPFjsYXL_gXu8lZJEOFwvLSoOfVwjXsX8wJqPC4U0LvRwH2nOt1us5JCmp9fnrNtcV2aTMrbApu7lPyT3X2E0qCryUONTZ5umPGvFAj3enETgYSyW3seyIG0LPtBUJlTlN2UPL8JObWmTFUoyxzMEFf1bUI1Qk-ruSc_pFcR8i26dyOJJCtqQpnVX5D7aXwHikUm5d7PPc999Ng1p_Jx6ZNqUd4VWuxEbhBNivUImsvH_N0UjX0jmltKFVfx8qg_TVOw5tgk5AYzLcvcAeC2xlsDIxglFCRofip_TpWHbRIqw6xr5Qvu1iL3F8Z-IhxtgSE9GxcwEUCCKuba42QeenprNcrOcscHcwFhVWkXAmNfSLv2QCxKLTgR8kN94d5mfzqG-DKRIYNLuIz-T_2bfeAbISax4vUUgix73lSTJusGniLMBuSGXkfPerF5BHfehO4RRfHpDN6OCPWf0InqaNbgVNzcru-G4AgAVu7cvakig6wv49LQzlvsSn82qANwUyuq0zMD9gef4mEGQCaMHz9VJe5Ocu50pvxIscln0EAR1HaJWGD8B1uetMzEcEG6d9p2bSVqw2M7msJCQyVjhT9-JvJuEqJykjbnjt7KbAKHpRG_k47BXgtdhK-TGH5vymvUdJ9whW2WANKZspnMYdShxJQTMKJmm9o7c-sKHCSxh5An2MnlE2IzxozS2BpZT4KEdZHsHuGGrlhdjNWLLtQyitHoSimmOGR4Fwz5G5k_G_wroH1hCJXMPua0hUjUZruI-4EVmU4byMQHg4JBf1dPX2hqI-CSY2VH9pG1ezrSMMaZif4ZvTjsuk-5ch0xABDD8mKqTEYW5DdX5kzbj9oSRL3XOYYgNPRiKSQDQaH-htlvB6Fux4fjCnISg78vThZo34C9590QjRicRVefx1W1ztMlBgFS3Is_mklXsInuxwNqxUxbQrrx9wHFIcch8UgIwraSbVuGK4i1cwpxo-J2zQxstMzhmlQpMvCYaS2ndUxVPuzJoXJPq8W2Abay8WLXx4XsJqiKSGfMfO6RdH-qF6oJcUMg7m0lkv42dMZI3FT7_pZkBqcUQZGnAskHRETIFz3vxavP59qSY2B0Cp2_SrAW-GPpNj17ZZJmsJQZZcFA4r_QuvfOE0sF5qZgDEPnUJd1nsAtnE_48IzRvlcCzb-SkQdjGtKEDgPC9lpSmtLdO9jEModWgVLe4sQAss_Wj_RqnxtnLbvhcJ3DXls0bkNZb4FjqJwdMk3YJk2shQ7nAfyng9d41EsS5mtojZXCRK_zHg69OAFhPtu3vutezdAn31K5g4eJ5CjZx4m3smHwGHQoh-CcCzzxTfpTRCLVMHg9CJCJtJuq774AhWPHwUcjoMtcsSFRKwxYCNFeMcpqKR0zd89RD9jnPaSTsz2SK4oAnWLA24KlKxnUslLFHnhGvLiumOHpY11R6XVJrPMZberYJt_NyHI_X6jiwtwZxoNzHchvetEpG3CR3xBg0uZd3AwKMP-QzVyk9Gpley0-l7qjI8pNFt8QhAnwL4VAuv38yo18oNAntl-_aE5AnHZQwqPBOJa6MxQyalra7prawGtFKgYLtUnRnud3dx0l68GqQ3qSrcJDACKAmrWUps-aWLxIhfZiMlxQDVL3WI8WUZvJ1KJ1vbRJw8vkruzD8kU1cPmnnz4hTJI66W_aFbb9eoRUY6r9ovVQqjflpAOQwOCY4OhaprSPvjFXcFZn1uBKmXuxXXU6oZMjwbOzwpnpJ2d9Ip-te0eoif1gqe74HpZM70syGZJyrxu0qk1DpLqqk5oB1cF2PxgEm2nOVQpqEU7M_3BtopCnyEC-UuHv3m3ZH9XPwCRMq8oFNHHyYVKEem3_1G_FldsIkc2nscBy7y-0pnsuL10WEOGlo3qDfSDT5eS-Vl5n3U7XmFb8oxa3sBAfuA22BijvdDKkQpL2tsPOSl1WGyIi8MUPJ3ulHOQbitTYcLdz3JNTgWosaQY6U-zbs7RJ.tAgS54KQKDaEkrIhSq9i1g; __cflb=0H28vzvP5FJafnkHxj4S2zYufVTKu2UYKxuEkC3zqYZ; cf_clearance=U8gBKrH8jC_clRU1__nPOA8W8_Az15dJWT4r6tscZIE-1727146415-1.2.1.1-XeOKsWIW3vPAa4FCXZ9yjJskKmR5ltXP1WDQgByr1iwFVOC8kF2LBZ2aYtiu0wfV6XEpsvxKjW95qI_aOkbABhhDI3XmRNYXTblp1As92aGXU8Ff0eWHSjQpIio6pekspzJZwtUCKZoebPjLAqwwX3AQbI5XtMVMfkEF5d5fey5wBndss1VM3jD.Jf1BT1iTKcM_bYYQtvWo6I2ClYGs75CiCrURU_VrMZ046ToD4L41HkkNHzjGSyROjAgMu0Pr0nQSr1BzS1SECxK9esxoQHsD25QQGMi_eCE_PirTUkdhiSHqlwZA267WDrmKT853ddONDy4pHLNi5trpq7bI2wfY1DdZboXPxyQSpnAAJgz1zJ8tb.UHgF2QR9DR3uTN.Jxi801XqWY0Hs1Jrch8RuyVoMCtZZhWTDZ3GOMxOmE; _uasid=\"Z0FBQUFBQm04aXJTSWcwZWxuTDZ6aU1abVExYXZmNFhTVDZvVG5CbXM5V0ZTa2Mtczl2dXozbGdmdmVjVDJuUHVBTHVyd0xBNjl1T0pGQVp1d0JKSnpyTWRwd283Z1A5SXZWN2FRcDBZT2hDX1NVT1p6T0Q3S0NmT0VyR2dqRDB3bWxPQmNjSEpxVmxvak1IQWNOWHFZalkwS2diSzZIWGY3TGlpTzczcjFDTzd1cmxfRXM3VHdKeUxXNjI0RmVmVjdLVTllUF9UN3VWZXBSenR3OWF3Y1dXQ21yU1NQT29QWnRNQmJVVTRzNFZiZkFQVkt1OFZ3ZWppTVE2cGlnclY0b2NQUDZzeE4zejdaRjN5U1kwNWQ3UTM5djFXeXdZWUVKYVdmQTRuX2FGOWhfbzhGQjEtR0d2TTRuZ016TE1XR2tMQ3NnVHhWZUdEVkRRclRYOGdRWDdid2pwVWx2M053PT0=\"; _umsid=\"Z0FBQUFBQm04aXJTU1VJWTEycllJUF8wSWpaNGk0SDMzS1NOcWdwOWlLOWNYOFVaYnF3TUhhaTlFS083UlB4NGxiZDYwNk5iZTNGVVMtdzkwMGtsWjhrVmY3TWhZTUFYSlZ6YW9xLTA5NGM3eG1ZcDJTUEEtc0xFaGxUUnVaeVg5VmlEekU2ZXFrci1uRmhYU1AtZzhlQnluclBfUVFMY1RqbktGV1F6cEhaOWNGai1NUUVqcFRLWWJ0ei14V24wRlZNa0pSM25aSk93a2ItdmVjdm9LV0NkamVBS2lsbUZiLUJ0aWpoOWgyTHFZcjltSmxyd3VTdz0=\"; __cf_bm=8SY0EETyEPzBBf_OJyzD6OCYJD1v2x1KD9zva1Afi5E-1727147525-1.0.1.1-9YajMHpajZdDwvI4EJNW8sFPvlbaw_ruFeCGxncamRi3Z2oBhFLy07Cv6ERLPZvkkfaxouJvOpPd_50afLyCzw; _cfuvid=kjkafHneiv6UGUUdl.OTaF0OUq4DtR6xUFO6gz3zLgs-1727147525551-0.0.1.1-604800000; oai-nav-state=1; _dd_s=rum=2&id=1a611dea-b855-4400-8edc-231c5c59be56&created=1727146410512&expire=1727148454424&logs=1",
            "Referer": "https://chatgpt.com/c/66f229e2-058c-800d-8181-93089698b30e",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"is_visible\":false}",
        "method": "PATCH"
    })

    return res.status
}

const auto_delete = async () => {

    let loop = true;

    while (loop) {

        let data = await get_conversation()

        if (data.items.length === 0) {
            console.log("No Conversation.")
            loop = false;
            break;
        }

        data.items.forEach(async element => {
            console.log(`Deleting ${element.title}`)
            let status = await delete_id_conversation(element.id)
            console.log(`Status : ${status}`)

            if (status === 404) {
                loop = false;
            }

        });
    }



}

auto_delete()