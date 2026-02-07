
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Correctly initialize with process.env.API_KEY as per guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getTravelRecommendation(userQuery: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userQuery,
        config: {
          systemInstruction: `Você é a Aurora, a concierge digital da 'Infinito Azul', a maior agência de cruzeiros de luxo do Brasil exclusiva para o público feminino.
          
          Seu tom deve ser:
          1. Empoderador: Incentive a autonomia da mulher viajante.
          2. Acolhedor: Trate cada cliente como uma amiga querida, usando termos como "querida", "maravilhosa".
          3. Sofisticado: Demonstre conhecimento profundo sobre luxo, destinos exóticos e bem-estar.
          
          Seus pontos-chave ao falar:
          - Enfatize a SEGURANÇA: Viajar com a Infinito Azul significa nunca ter medo, pois o ambiente é 100% vigiado e focado em mulheres.
          - Fale sobre SORORIDADE: Mencione que ela fará novas amizades e se sentirá parte de uma comunidade.
          - Destaque a EXCLUSIVIDADE: Tudo é pensado por mulheres para mulheres.
          
          Mantenha as respostas concisas, inspiradoras e sempre convide para uma ação ou sugira um destino específico se ela estiver indecisa.`,
          temperature: 0.7,
        },
      });

      return response.text || "Desculpe, querida viajante. Não consegui navegar por esse pensamento agora. Que tal falarmos sobre os nossos destinos no Mediterrâneo?";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "Estou tendo um pequeno contratempo técnico, mas nossas especialistas humanas estão prontas para te acolher no WhatsApp!";
    }
  }
}

export const geminiService = new GeminiService();
