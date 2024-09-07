import fetch from "node-fetch"; // Pastikan Anda sudah menginstal node-fetch

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nama, nomer, total, metod, alamat, produk, pembayaran } = req.body;
    let message = `*JAJAN PANGLIMA*\nNama Penerima: *${nama}.*\nNomer: https://wa.me/${nomer}\nAlamat: _${alamat}._\nProduk:\n`;
    produk.forEach((item, index) => {
      message += `${index + 1}. Nama Produk: *${item.nama}*, Harga: ${rupiah(
        item.harga
      )}, Jumlah: *${item.quantity}*\n`;
    });
    message += `\nPembayaran: *${pembayaran}*\nMetod: *${metod}* \nTotal Dibayar: *${total}*`;

    const chatId = process.env.TELEGRAM_CHAT_ID; // Ganti dengan ID chat Telegram Anda
    const botToken = process.env.TELEGRAM_BOT_TOKEN; // Ganti dengan token bot Telegram Anda

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown", // Optional: untuk mendukung format Markdown
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        res.status(200).json({ message_id: data.result.message_id });
      } else {
        res.status(500).json({ error: data.description });
      }
    } catch (error) {
      console.error("Telegram API error:", error); // Logging error untuk debug
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
