export async function handlePaymentSuccessWebhook(event: any) {
  const paymentIntent = event.data.object;

  console.log("Paiement réussi:", paymentIntent);

  // Vérifier si le paiement est réussi
  // if (paymentIntent.status === "succeeded") {
  //   // Récupérer les informations nécessaires pour la mise à jour du stock
  //   const productsToUpdate = getProductsFromPaymentIntent(paymentIntent);

  //   // Appeler la fonction pour mettre à jour le stock
  //   const updateStockResult = await updateProductStock(productsToUpdate);

  //   // Gérer les erreurs ou enregistrer les informations
  //   if (updateStockResult.error) {
  //     console.error("Erreur lors de la mise à jour du stock:", updateStockResult.error);
  //   } else {
  //     console.log("Stock mis à jour avec succès.");
  //   }
  // } else {
  //   console.log("Le paiement n'est pas en statut réussi, aucune action nécessaire.");
  // }
}
