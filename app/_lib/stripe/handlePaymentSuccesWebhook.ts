import { updateProductStock } from "@/sanity/utils/updateProductStock";

export async function handlePaymentSuccessWebhook(event: any) {
  const paymentIntent = event.data.object;

  if (paymentIntent.status === "succeeded") {
    // Récupérer les informations nécessaires pour la mise à jour du stock
    // const productsToUpdate = getProductsFromPaymentIntent(paymentIntent);

    // Appeler la fonction pour mettre à jour le stock
    const updateStockResult = await updateProductStock(
      JSON.parse(paymentIntent.metadata)
    );

    // Gérer les erreurs ou enregistrer les informations
    if (!updateStockResult) {
      console.error(
        "Erreur lors de la mise à jour du stock:",
        paymentIntent.metadata
      );
    } else {
      console.log("Stock mis à jour avec succès.");
    }
  } else {
    console.log(
      "Le paiement n'est pas en statut réussi, aucune action nécessaire."
    );
  }
}
