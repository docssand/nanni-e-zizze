<template>
  <div class="position-relative">
    <b-modal class="modal bg-dark position-absolute" modal-sm id="phoneModal" title="Contattaci" hide-footer>
      <div class="my-4 mx-auto">Orari
        <table>
          <tr>
            <th>Giorno</th>
            <th>Orari</th>
          </tr>
          <tr>
            <td>lunedì</td>
            <td>chiuso</td>
          </tr>
          <tr>
            <td>martedì</td>
            <td>19:00 - 23:00</td>
          </tr>
          <tr>
            <td>mercoledì</td>
            <td>9:00 - 23:00</td>
          </tr>
          <tr>
            <td>giovedì</td>
            <td>9:00 - 23:00</td>
          </tr>
          <tr>
            <td>venerdì</td>
            <td>9:00 - 23:00</td>
          </tr>
          <tr>
            <td>sabato</td>
            <td>9:00 - 23:00</td>
          </tr>
          <tr>
            <td>domenica</td>
            <td>9:00 - 23:00</td>
          </tr>
        </table>
      </div>
      <p class="h4 my-4">Numero di telefono:
        <a href="tel:3333333333">3333333333</a>
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.modal {
  top:0;
}
</style>