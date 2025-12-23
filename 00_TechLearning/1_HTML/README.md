image tag :- 
<img></img> ---> tag should contian the following attribut
    1. src & alt
    2. height and weight
    3. loading :- 
        * lazy ---> load only when the image is about to view this decreasing the loading time 
        * eager ---> load all the images at onces---> takes a lot of memory ---> slows the web page
    4. title ---> gives a idea of image ---> is shown only when it is hower on

sementaic of HTML pages :- 
1. idealy <h1> <h2> <h3> tages should me their in the html 

2. <nav></nav> tag is used to add naviagation realted information
                can be more than one nav element
                <nav></nav> can be label by a aria-labelledby

3. <hr> ---> Horizonal rule [means :- their is a sepration of topic]

4. <header></header> ---> can be more than one

5. <main></main> ---> main{or the context} area of the page
                      only one main per page

6. <footer></footer> ---> can be more than one per page

7. <article></article> ---> article has a clear topic
8. <section></section> ---> has a gerentic topic 

9. <aside></aside> ---> a other information which is a not the as importane as the main topic

10. <details> & <summary> tag ---> can be used to add some other information ----like :- quize or any thing else

    <details>
        <summary>
        
        </summary>
    </details>

11. <mark></mark> ---> can highlight the particual text

12. <time datetime =""></time> ---> used to store the time / duration 

<!-- avoid using this --- use tag with more semantic meaning -->
13. <div></div> ---> no semantic meaning of the tag 
                     block element
14. <span></span> ---> no semantic meaning of the tag
                       in-line element

15. <table></table> --->
    <table>
        <caption>.......</caption> ---> contains the caption for the table
        <thead>........</thead> ---> contains the head of the row / column
        <tbody>........</tbody> ---> contians the body of body of the table
    </table>

    <rowspan = ""> & <colspan = ""> ---> rowspace cover the row --&-- columnspan cover the column
    <th> ---> table head
    <tr> ---> table row
    <td> ---> table data
    <scope="row"> -&- <scope = "col"> ---> 

16. <a href="#about"> ---> this "#" are used to navigate through the page with <id = "about">
17. <a href="/"> ---> navigate to the top of the page

18. <form action ="---<Link>---" method ="get">

          <label for="indigate which id is connected with which ladel"> ---<<contain>>--</label>
          <input type="--<< input_type >>"
                 name="--<< server will take input with the name >>--"
                 id="--<< must be same as that of for >>--"
                 placeholder="--<< default value >>--"
                 autocomplete="on / off" --<< automatically show the past entry in the form -- is not supported by a input type ="password" >>--
                 required --<< nesserary to be filled >>--
                 autofocus --<< autofocus can be assign to one one block >>>

            <label for="phone"> Phone: </label>
            <input type="tel" 
            name="phone" 
            id="phone" 
            placeholder="555-555-5555" 
            pattern="[0-9]{3}[0-9]{3}[0-9]{3} --<<This means [0-9] input contains 0 to 9 and {3} in the pair of 3>>--
            required>

            <label for="decade"> favorite decade: </label>
            <input type="number" 
            name="decade" 
            id="decade"
            min="1950"
            max="2020"
            step="10"
            value="1980">

        <!-- type 1 selector -->
            <label for="coffee"> Favorite Coffe:</label>
            <select name="coffee" id="coffee">
                <option value="regular coffee"> Regular Coffee</option>
                <option value="latte"> Latte</option>
                <option value="iced_coffee">Iced Coffee</option>                    <!-- output_screen :- select-option.png -->
                <option value="cappuccino">Cappuccino</option>                      <!-- to select a particaular option used attribute "selected" -->
                <option value="cortado">Cortado</option>
                <option value="americano">Americano</option>
                <option value="other">Other</option>
            <select>

        <!-- type 2 selector -->
            <label for="coffee">Favorite Coffee:</label>
            <input type="text" name="coffee" id="coffee" list="coffee-list">        <!-- list an the datalist attribute will have the same name -->
            <datalist id="coffee-list">
                <option value="coffee">
                <option value="latte">
                <option value="espresso">                                           <!-- output-screen :- datalist-option.png -->
                <option value="cortado">
                <option value="americano">
                <option value="other">
            <datalist>

        <!-- <fileldset> & <legend> tags are used to add extra information in the form  -->
        <filedset>
            <legend>Personal Information</legend>                                   <!--output-screen :- fildset-legend.png-->
        </filedset>

        <!-- Radio_button -->
        <filedset>
            <legend>What is your favorite food?</legend>
            <p>
                <input type="radio" name="food" id="tacos" value="tacos">
                <label for="tacos">Tacos</label>
            </p>
            <p>                                                                     <!--note:- The name should be same is the name is not same than from than one radio-button can be selected-->
                <input type="radio" name="food" id="pizza" value="pizza">           <!--output-screen :- Radio-button.png -->
                <label for="pizza">pizza</label>
            </p>
            <p>
                <input type="radio" name="food" id="other" value="other">
                <label for="other">Other</label>
            </p>
        </filedset>

        <!-- check-box-button -->
        <filedset>
            <legend>Do you have pets?</legend>
            <p>
                <input type="checkbox" name="pets" id="Dogs" value="Dogs">
                <label for="Dogs">Dogs</label>
            </p>
            <p>                                                                     <!--note:- The name should be same,multiple options can be selected-->
                <input type="checkbox" name="pets" id="cats" value="cats">          <!--output-screen :- checkbox-button.png -->
                <label for="cats">cats</label>
            </p>
            <p>
                <input type="checkbox" name="pets" id="otherPets" value="otherPets">
                <label for="otherPets">OtherPets</label>
            </p>
        </filedset>

        <filedset>
            <legend>Send Me A Note?</legend>
            <label for="message">Your Message:</label>                              <!--output-screen :- message.png -->
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message here"></textarea>
        </filedset>

        <button type="submit">Submit</button>
        <button type="Reset">Reset</button>
        <button type>
    </form>