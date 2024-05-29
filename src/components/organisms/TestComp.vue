<template>
    <div class="product">
        <div class="cart">
            <p>Cart(0)</p>
        </div>

        <div class="product">
            <div class="product-image">
                <img src="@/assets/vmSocks-green.png" alt="A pair of socks">
            </div>
            <div class="product-info">
                <h1>Vue Mastery Socks</h1>
                <p>➡ Vue Mastery Socks are on sale!</p>
                <p class="outOfStock">➡ Out of stock</p>
            <div>

            <ul>
                <span class="tabs activeTab">Shipping</span>
                <span class="tabs">Details</span>
            </ul>
            
            <div style="">
                <p>$250</p>
            </div>
            
            <div style="display: none;">
                <ul>
                    <li>80% cotton</li>
                    <li>20% polyester</li>
                    <li>Gender-neutral</li>
                </ul>
            </div>
        
        </div>
        
        <div class="color-box" style="background-color: green;"></div>
        <div class="color-box" style="background-color: blue;"></div>
        
        <button class="disabledButton">Add to Cart</button>
        <button class="disabledButton">Clear Cart</button>
    </div>
    </div>
    </div>
</template>
<script lang="ts" setup >
/***********************************************************************************************************/
/*                                             I M P O R T                                                 */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                               D A T A                                                   */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                            C O M P U T E D                                              */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                              P R O P S                                                  */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                           L I F E C Y C L E                                             */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                             M E T H O D                                                 */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                               E M I T                                                   */
/***********************************************************************************************************/

/***********************************************************************************************************/
/*                                              W A T C H                                                  */
/***********************************************************************************************************/

</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #787878;
    }

    body {
        font-family: 'Roboto Mono', monospace;
        color:#282828;
        margin: 0px;
    }

    .nav-bar {
        background: linear-gradient(-90deg, #84CF6A, #16C0B0);
        height: 60px;
        margin-bottom: 15px;
    }

    .product {
        display: flex;
        flex-flow: wrap;
        padding: 1rem;
    }

    img {
        border: 1px solid #d8d8d8;
        width: 70%;
        margin: 40px;
        box-shadow: 0px .5px 1px #d8d8d8;
    }

    .product-image {
     width: 80%;
    }

    .product-image,
    .product-info {
        margin-top: 10px;
        width: 50%;
    }

    .color-box {
        border-radius: 5px;
        width: 40px;
        height: 40px;
        margin-top: 5px;
    }

    .cart {
        border-radius: 5px;
        margin-right: 25px;
        float: right;
        border: 1px solid #d8d8d8;
        padding: 5px 20px;
    }

    button {
        margin-top: 30px;
        border: none;
        border-radius: 5px;
        background-color: #1E95EA;
        color: white;
        height: 40px;
        width: 100px;
        font-size: 14px;
    }

    .disabledButton {
        background-color: #d8d8d8;
    }

    .outOfStock {
        text-decoration: line-through;
    }

    .review-form {
        margin-left: 600px;
        margin-top: 20px;
        width: 400px;
        height: 650px;
        padding: 20px;
        border: 1px solid #d8d8d8;
    }

    .reviews {
     margin: auto;
    }

    input {
        margin-bottom: 20px;
    }

    textarea {
        width: 100%;
        height: 60px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    input[type=text], select {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        float: right;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    .tab {
        margin-left: 300px;
        cursor: pointer;
    }

    .tabs {
        margin-left: 20px;
        cursor: pointer;
    }

    .activeTab {
        border: 2px #000 dotted;
        padding: 6px;
        color: #16C0B0;
        text-decoration: none;
    }

    .head {
        margin: 30%;
        font-weight: 500;
        font-size: 19px;
        text-transform: uppercase;
    }

</style>