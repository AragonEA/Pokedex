export default ` 
    <main>
        <div class="container">

            <section class="left">
                <div id="pokemon-data" class="nes-container is-centered background-white border-radius">
                    <picture>
                        <img id="pokemon-img" class="img" alt="pokemon-image">
                    </picture>
                    <p id="pokemon-name" class="title">NAME</p>
                    <ul class="nes-list is-disc" id="pokemon-stats">
                        <li id="pokemon-id">ID: </li>
                        <li id="pokemon-type">TYPE: </li>
                        <li id="pokemon-height">HEIGHT: </li>
                        <li id="pokemon-weight">WEIGHT: </li>
                    </ul>
                    <div>
                        <button id="modal-btn" class="nes-btn">Show Abilities & Movements</button>
                        <div class="modal">
                            <div class="modal-content">
                                <div class="modal-title">
                                    <span id="close-btn" class="close">&times;</span>
                                    <h2>Abilities</h2>
                                </div>
                                <div id="abilities-section" class="modal-data">
                                    <ul id="abilities">
                                        <li>Loading...</li>
                                    </ul>
                                </div>
                                <div class="modal-title">
                                    <h2>Movements</h2>
                                </div>
                                <div id="movements-section" class="modal-data">
                                    <ul id="movements">
                                        <li>Loading...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="right">
                <div id="pokemon-grid" class="nes-container is-centered background-white border-radius">
                </div>
                <nav id="nav-bar">
                    <button id="previous-btn" type="button" class="nes-btn is-error">Previous</button>
                    <div class="nes-select">
                        <form onsubmit="return false" id="selector-form">
                            <select id="page-selector" name="selector">
                            </select>
                            <input id="select-btn" class="nes-btn" type="submit" value="Select Page">
                        </form>
                    </div>
                    <button id="next-btn" type="button" class="nes-btn">Next</button>
                </nav>
            </section>

        </div>
    </main>`