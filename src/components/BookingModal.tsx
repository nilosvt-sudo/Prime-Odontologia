import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC, waLink } from "../config";
import { CheckIcon, WhatsIcon } from "./Icons";
import { usePrefersReducedMotion } from "../hooks";

export function openBookingModal(initialService?: string) {
  window.dispatchEvent(
    new CustomEvent("open-booking-modal", { detail: { service: initialService } })
  );
}

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const reduced = usePrefersReducedMotion();
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "Implantes Dentários",
    periodo: "Qualquer horário",
    observacao: "",
  });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail?.service) {
        setForm((prev) => ({ ...prev, servico: customEvent.detail.service! }));
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `Olá, Equipe Prime Odontologia! Gostaria de agendar uma avaliação:
• *Nome:* ${form.nome}
• *WhatsApp:* ${form.telefone}
• *Interesse:* ${form.servico}
• *Melhor período:* ${form.periodo}${
      form.observacao ? `\n• *Observação:* ${form.observacao}` : ""
    }`;

    setTimeout(() => {
      window.open(waLink(msg), "_blank", "noopener,noreferrer");
      setIsOpen(false);
      setSubmitted(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-coal-950/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.2rem] border border-gold-500/30 bg-snow shadow-[0_50px_100px_-30px_rgba(15,17,19,0.8)] z-10 my-auto"
          >
            {/* Faixa dourada no topo */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

            {/* Botão Fechar */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar formulário"
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-coal-900/15 bg-paper text-coal-700 transition-all hover:rotate-90 hover:border-gold-500 hover:text-coal-950 cursor-pointer"
            >
              ✕
            </button>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50 mb-4">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-coal-950">
                    Redirecionando ao WhatsApp...
                  </h3>
                  <p className="mt-2 text-sm text-coal-700 max-w-xs">
                    Sua solicitação foi preparada. Você será atendido diretamente pela equipe da Prime Odontologia!
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-[0.24em] text-gold-700 uppercase">
                      Agendamento Rápido
                    </p>
                    <h3
                      id="modal-title"
                      className="font-display mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-coal-950"
                    >
                      Preencha para Agendar
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-normal text-coal-700">
                      Informe seus dados e receba a confirmação com os horários disponíveis.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-coal-800 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="Seu nome e sobrenome"
                        className="w-full rounded-xl border border-coal-900/20 bg-paper px-4 py-3 text-sm text-coal-950 transition-all focus:border-gold-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-coal-800 mb-1.5">
                          WhatsApp com DDD *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.telefone}
                          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                          placeholder="(32) 99840-1535"
                          className="w-full rounded-xl border border-coal-900/20 bg-paper px-4 py-3 text-sm text-coal-950 transition-all focus:border-gold-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-coal-800 mb-1.5">
                          Melhor Período
                        </label>
                        <select
                          value={form.periodo}
                          onChange={(e) => setForm({ ...form, periodo: e.target.value })}
                          className="w-full rounded-xl border border-coal-900/20 bg-paper px-4 py-3 text-sm text-coal-950 transition-all focus:border-gold-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                        >
                          <option value="Qualquer horário">Qualquer horário</option>
                          <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                          <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-coal-800 mb-1.5">
                        Tratamento de Interesse *
                      </label>
                      <select
                        value={form.servico}
                        onChange={(e) => setForm({ ...form, servico: e.target.value })}
                        className="w-full rounded-xl border border-coal-900/20 bg-paper px-4 py-3 text-sm text-coal-950 transition-all focus:border-gold-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      >
                        <option value="Implantes Dentários">Implantes Dentários & Cirurgia Guiada</option>
                        <option value="Clareamento Dental">Clareamento Dental Supervisionado</option>
                        <option value="Harmonização Facial">Harmonização Facial</option>
                        <option value="Odontopediatria">Odontopediatria (Atendimento Infantil)</option>
                        <option value="Reabilitação Oral 60+">Reabilitação Oral & Próteses (60+)</option>
                        <option value="Avaliação Geral & Limpeza">Avaliação Geral / Limpeza / Prevenção</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-coal-800 mb-1.5">
                        Observação ou Dúvida (opcional)
                      </label>
                      <textarea
                        rows={2}
                        value={form.observacao}
                        onChange={(e) => setForm({ ...form, observacao: e.target.value })}
                        placeholder="Ex: Gostaria de saber mais sobre valores ou horários para sábado."
                        className="w-full resize-none rounded-xl border border-coal-900/20 bg-paper px-4 py-2.5 text-sm text-coal-950 transition-all focus:border-gold-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      />
                    </div>

                    <div className="pt-2">
                      <motion.button
                        whileHover={reduced ? undefined : { scale: 1.02 }}
                        whileTap={reduced ? undefined : { scale: 0.98 }}
                        type="submit"
                        className="btn btn-whatsapp w-full py-4 text-sm font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <WhatsIcon className="h-5 w-5" />
                        Enviar e Confirmar Horário no WhatsApp
                      </motion.button>
                      <p className="mt-2 text-center text-[0.72rem] text-coal-600">
                        Atendimento seguro · {CLINIC.phoneDisplay} · {CLINIC.city}
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
